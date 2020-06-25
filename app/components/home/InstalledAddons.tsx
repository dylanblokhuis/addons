import React, { useEffect } from "react";
import { ipcRenderer } from "electron";
import useSWR from "swr";
import { Button, Table } from "../elements";
import { theme } from "../Layout";

interface Props {
}

function InstalledAddons(props: Props) {
  const { data, error } = useSWR(
    "get-addons",
    (url) => ipcRenderer.invoke(url, localStorage.getItem("directory")),
  );

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Table className="w-100">
      <thead>
        <tr>
          <th>Addon</th>
          <th>Status</th>
          <th>Latest Version</th>
          <th>Game Version</th>
          <th>Author</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>World quest tracker</td>
          <td>
            <Button color={theme.background}>Update</Button>
          </td>
          <td>
            WorldQuestTracker-v8.3.0.zip
          </td>
          <td>
            8.3.0
          </td>
          <td>
            Blokys
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InstalledAddons;
