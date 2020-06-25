interface Toc {
  tags: {
    Title: string
    Dependencies?: string
    RequiredDeps?: string
    Interface?: string
    "X-Curse-Project-ID"?: string
  }
  files: string[]
}

export function parse(input: string) {
  const lines = input.split(/\r*\n/); //allow Windows newlines
  const out: Toc = {
    tags: {
      Title: '',
      Dependencies: undefined,
      RequiredDeps: undefined,
      "X-Curse-Project-ID": undefined
    },
    files: []
  };

  lines.forEach(function(line) {
    if (line.length > 1024) {
      //WoW only reads the first 1024 lines
      line = line.substr(0, 1024);
    }

    if (line.substr(0, 2) === '##') { //## Title: Recount
      var tag = line.substr(2, line.indexOf(':')).trim().replace(':', '');
      var value = line.substr(line.indexOf(':')+1, line.length).trim();
      // @ts-ignore
      out.tags[tag] = value;
    } else if (line.substr(0, 1) === '#') { //#bug not feature
    } else { // recount.lua
      //file loading
      if (line.trim() !== '') {
        // @ts-ignore
        out.files.push(line.trim());
      }
    }
  });
  return out;
};
