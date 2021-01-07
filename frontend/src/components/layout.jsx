import ThemeProvider from "../components/ThemeProvider";
import NavBar from "./navbar";
import React, { useState, useEffect } from "react";
import CSSBaseline from "@material-ui/core/CssBaseline";

function Layout(props) {
  const [isDark, setDark] = useState(false);
  return (
    <ThemeProvider isDark={isDark}>
      <CSSBaseline />
      <NavBar setDark={(bool) => setDark(bool)} />
      {props.children}
    </ThemeProvider>
  );
}

export default Layout;
