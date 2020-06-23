import React from "react";
import { RefreshCw } from "react-feather";
import { Button, Table } from "../components/elements";
import { theme } from "../components/Layout";

function Home() {
  return (
    <div className="w-100">
      <h1>Installed Addons</h1>

      <section className="row mb-3">
        <div className="col-lg-4">
          <Button className="d-flex align-items-center">
            <RefreshCw size="20px" />
            <span className="ml-2">Refresh</span>
          </Button>
        </div>
      </section>

      <section className="w-100">
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
      </section>
    </div>
  );
}

export default Home;
