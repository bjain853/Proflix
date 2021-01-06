import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#263238",
            light: "#4f5b62",
            dark: "#000a12",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ffca28",
            light: "#fffd61",
            dark: "#c79a00",
            contrastText: "#000000",
        },
    }
})