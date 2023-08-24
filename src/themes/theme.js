import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


const rootTheme = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                a: {
                    textDecoration: "none",
                },
            }
        }
    },
}

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#030712",
            dark: "#111827",
            light: "#1f2937",
        },
        secondary: {
            main: "#10b981",
        },
        divider: "#d1d5db",
        background: {
            default: "#030712",
            paper: "#111827",
        },
        text: {
            primary: "#ffffff",
            secondary: "#030712",
        },
    },
    components: {
        ...rootTheme
    }
})

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
            dark: "#f9fafb",
            light: "#f3f4f6",
        },
        secondary: {
            main: "#10b981",
        },
        background: {
            default: "#f9fafb",
            paper: "#f3f4f6",
        },
        text: {
            primary: "#030712"
        }
    },
    components: {
        ...rootTheme
    }
})