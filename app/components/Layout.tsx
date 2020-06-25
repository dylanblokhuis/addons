import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

export const theme = {
  background: "#232c39",
  primary: "#0066ff",
  success: "green",
  fontFamily: "Inter, Roboto, Arial, Helvetica, Helvetica Neue, sans-serif;",
  color: "#fff",
  backgroundDark: "#0b0e13",
};

const Global = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    position: relative;
    color: ${(props) => props.theme.color};
    height: 100%;
    background-color: ${(props) => props.theme.background};
    font-family: ${(props) => props.theme.fontFamily};
    overflow-y: hidden;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-weight: 500;
    font-size: 30px;
  }
`;

const Dragbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  z-index: 2;
  background: transparent;
`;

function Layout({ children }: { children: any }) {
  return (
    <ThemeProvider theme={theme}>
      <Dragbar />
      <Global />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
