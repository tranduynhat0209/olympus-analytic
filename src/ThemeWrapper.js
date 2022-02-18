import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import App from "./App";
export default function ThemeWrapper(){
    const isDarkMode = useSelector(state=>state.themeSlice.isDarkMode)
    const theme = createTheme({   
        palette:{
            mode: isDarkMode ? "dark": "light",
            background:{
                paper: 
                isDarkMode? "radial-gradient(123.22% 129.67% at 100.89% -5.6%, #201D47 0%, #17153A 100%)"
                : 'radial-gradient(28.91% 81.86% at 6.93% 9.5%, #FFFFFF 0%, rgba(254, 254, 255, 0.81) 100%);'
            },
            primary:{
                main: isDarkMode ? "#FFFFFF": "#4C4C66",
                light: isDarkMode? " rgba(111, 203, 247, 0.5)"
                : 'rgba(255, 204, 245, 0.05)',
                dark: 
                isDarkMode ? 
                "rgba(27, 25, 67, 0.71)":
                'rgba(255, 204, 228, 0.1)',
            },
            secondary:{
                main: isDarkMode ? "#5B5A99" : "#6F6C99"
            },
        },breakpoints: {
            values: {
              xs: 0,
              sm: 576,
              md: 768,
              lg: 992,
              xl: 1200,
              xxl: 1400,
            },
        },
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </div>
    )
}