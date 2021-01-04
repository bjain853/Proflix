import ThemeProvider from "../components/ThemeProvider";
import NavBar from "./navbar";
import React, { useState } from "react";

function Layout(props) {
  const [isDark, setDark] = useState(false);
  return (
    <ThemeProvider isDark={isDark}>
      <NavBar setDark={(bool) => setDark(bool)} />
      {props.children}
    </ThemeProvider>
  );
}

export default Layout;
