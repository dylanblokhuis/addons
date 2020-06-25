import fetch from 'node-fetch';

async function getAddon(name: string): Promise<Curse.Search | undefined> {
  try {
    const response = await fetch(`https://addons-ecs.forgesvc.net/api/v2/addon/search?gameId=1&categoryId=0&pageSize=3&searchFilter=${name}`);

    if (response.ok) {
      const data: Curse.Search[] = await response.json();

      data.forEach(addon => console.log(addon.name, name))
      return data.find(addon => addon.name === name);
    } else {
      return undefined;
    }
  } catch(e) {
    console.error(e);
    return undefined;
  }
}

export async function confirm(addons: Addons.CacheArgs[]) {
  let confirmedAddons: Addons.CacheReturn[] = [];

  for (const addon of addons) {
    // to prevent double requests.
    if (confirmedAddons.find(confirmedAddon => confirmedAddon.title === addon.title)) {
      continue;
    }

    const curseData = await getAddon(addon.title);

    if (curseData) {
      // releaseType 1 means its the main version
      let latestRelease = curseData.latestFiles.find(latestFile => latestFile.releaseType === 1);
      // if it doesn't exist get any version
      if (!latestRelease) latestRelease = curseData.latestFiles[0];

      // module type 3 means its the main module
      const mainModule = latestRelease.modules.find(module => module.type === 3);
      if (!mainModule) {
        continue;
      }

      const directoryNames = latestRelease.modules.map(module => module.foldername);

      const confirmed = addons.filter(addon => directoryNames.includes(addon.directory)).map(addon => {
        if (addon.directory === mainModule.foldername) return { ...addon, id: curseData.id };

        return {
          ...addon,
          parent: mainModule.foldername,
          id: curseData.id
        }
      })

      confirmedAddons = [...confirmedAddons, ...confirmed];
    }
  }

  return confirmedAddons;
}
