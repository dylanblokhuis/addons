import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import "./app.global.css";
import Router from "./Router";
import Layout from "./components/Layout";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener("DOMContentLoaded", () =>
  render(
    <AppContainer>
      <Layout>
        <Router />
      </Layout>
    </AppContainer>,
    document.getElementById("root"),
  ));
