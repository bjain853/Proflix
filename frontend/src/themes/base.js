import { lightTheme } from './light';
import { darkTheme } from './dark';

export function getThemeByState(isDark){
    return (isDark) ? darkTheme : lightTheme;
}