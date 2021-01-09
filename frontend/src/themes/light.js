import createMuiTheme from '@material-ui/core/styles/createMuiTheme';



export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary:{
            main: "#f44336",
            light: "#ff7961",
            dark: "#ba000d",
            contrastText: "#000000",
        },
        secondary: {
            main: "#00796b",
            light: "#48a999",
            dark: "#004c40",
            contrastText: "#ffffff",
        },
    }
})