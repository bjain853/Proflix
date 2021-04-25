import { lightTheme } from './light';
import { darkTheme } from './dark';


function getThemeByState(isDark){
    return (isDark) ? darkTheme : lightTheme;
}

export default {
    defaultTheme : lightTheme,
    getThemeByState
};