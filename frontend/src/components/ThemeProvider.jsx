import { MuiThemeProvider } from "@material-ui/core/styles";
import Object from "../themes/base";
import React from "react";

function ThemeProvider(props) {
  const theme = Object.getThemeByState(props.isDark);
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default ThemeProvider;
