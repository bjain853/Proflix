import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#607d8b",
            light: "#8eacbb",
            dark: "#34515e",
            contrastText: "#000000",
        },
        secondary: {
            main: "#c62828",
            light: "#ff5f52",
            dark: "#8e0000",
            contrastText: "#ffffff",
        },
    }
})