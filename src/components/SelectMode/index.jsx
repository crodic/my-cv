import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { stateApp } from "../../redux/selector";
import { changeMode } from "../../redux/slice/appSlice";

const BoxFlex = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const SelectMode = () => {
    const theme = useTheme();
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const dispatch = useDispatch();
    const { mode } = useSelector(stateApp);

    const handleChange = (e) => {
        dispatch(changeMode(e.target.value));
    };

    return (
        <Box sx={{ width: 150, height: 50 }}>
            <FormControl fullWidth>
                <InputLabel id="mode-theme">Age</InputLabel>
                <Select
                    labelId="mode-theme"
                    id="select-theme"
                    value={mode}
                    label="mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light">
                        <BoxFlex>
                            <LightModeIcon />
                            Light Mode
                        </BoxFlex>
                    </MenuItem>
                    <MenuItem value="dark">
                        <BoxFlex>
                            <DarkModeIcon />
                            Dark Mode
                        </BoxFlex>
                    </MenuItem>
                    <MenuItem
                        value={prefersDarkMode ? "system-dark" : "system-light"}
                    >
                        <BoxFlex>
                            <SettingsSystemDaydreamIcon />
                            System Mode
                        </BoxFlex>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectMode;
