import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Grid as GridIcon, Settings as SettingsIcon } from "react-feather";
import styled from "styled-components";

import Home from "./pages/Home";
import Settings from "./pages/Settings";

const Sidebar = styled.nav`
  background: ${(props) => props.theme.backgroundDark};
  min-width: 69px;
  padding-top: 35px;

  a {
    margin-bottom: 35px;
    color: ${(props) => props.theme.color};
  }

  a[aria-current] {
    color: ${(props) => props.theme.primary};
  }
`;

function Router() {
  return (
    <HashRouter>
      <div className="d-flex h-100">
        <Sidebar className="h-100 d-flex flex-column align-items-center">
          <NavLink exact to="/">
            <GridIcon />
          </NavLink>
          <NavLink to="/settings">
            <SettingsIcon />
          </NavLink>
        </Sidebar>

        <main className="px-4 pt-3 w-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default Router;
