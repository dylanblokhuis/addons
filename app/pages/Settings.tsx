import React, { useState } from "react";
import styled from "styled-components";
import { ipcRenderer } from "electron";
import { Folder, Check } from "react-feather";

import { Button } from "../components/elements";
import { theme } from "../components/Layout";

const InputDirectory = styled.div`
  cursor: pointer;
  background: ${(props) =>
  props.color ? props.color : props.theme.backgroundDark};
  color: ${(props) => props.theme.color};
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;

  span {
    opacity: .5;

    &.active {
      opacity: 1;
    }
  }
`;

function Settings() {
  const [isSuccess, setSuccess] = useState(false);
  const [fields, setFields] = useState({
    directory: localStorage.getItem("directory"),
  });

  async function handleDirectory() {
    const result = await ipcRenderer.invoke("open-directory");

    if (!result.canceled) {
      setFields({
        ...fields,
        directory: result.filePaths[0],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (fields.directory) {
      localStorage.setItem("directory", fields.directory);
      setSuccess(true);
    }

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <div className="w-100">
      <h1 className="mb-3">Settings</h1>

      <form method="post" onSubmit={handleSubmit}>
        <InputDirectory
          className="d-flex justify-content-between align-items-center mb-3"
          onClick={handleDirectory}
        >
          <span className={fields.directory ? "active" : ""}>
            {fields.directory
              ? fields.directory
              : "Select World of Warcraft directory"}
          </span>
          <Folder size="20px" />
        </InputDirectory>

        {isSuccess
          ? (
            <Button
              type="submit"
              className="d-flex align-items-center"
              color={theme.success}
            >
              Saved!
              <Check className="ml-2" size="20px" />
            </Button>
          )
          : (
            <Button type="submit" color={theme.primary}>
              Save
            </Button>
          )}
      </form>
    </div>
  );
}

export default Settings;
