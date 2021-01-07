import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { lightBlue } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary:lightBlue,
        secondary: {
            main: "#ffca28",
            light: "#fffd61",
            dark: "#c79a00",
            contrastText: "#000000",
        },
    }
})