import React from "react";
import { RefreshCw } from "react-feather";
import { Button } from "../components/elements";
import InstalledAddons from "../components/home/InstalledAddons";

function Home() {
  return (
    <div className="w-100">
      <h1 className="mb-3">Installed Addons</h1>

      <section className="row mb-3">
        <div className="col-lg-4">
          <Button className="d-flex align-items-center">
            <RefreshCw size="20px" />
            <span className="ml-2">Refresh</span>
          </Button>
        </div>
      </section>

      <section className="w-100">
        <InstalledAddons />
      </section>
    </div>
  );
}

export default Home;
