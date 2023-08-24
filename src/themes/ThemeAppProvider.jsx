import { useSelector } from "react-redux";
import { stateApp } from "../redux/selector";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";

const ThemeAppProvider = ({ children }) => {
    const { mode } = useSelector(stateApp);
    return (
        <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeAppProvider;
