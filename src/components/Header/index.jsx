import {
    AppBar,
    Box,
    Button,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import Logo from "../../assets/images/came.svg";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { stateApp } from "../../redux/selector";
import { changeMode } from "../../redux/slice/appSlice";
import styled from "@emotion/styled";

const ListMenu = ["About", "Work", "Testimonials", "Contact"];

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#030712" : "#ffffff",
    color: theme.palette.mode === "light" ? "#ffffff" : "#030712",
    "&:hover": {
        backgroundColor: theme.palette.mode === "light" ? "#6b7280" : "#9ca3af",
    },
}));

const Header = () => {
    const { mode } = useSelector(stateApp);
    const dispatch = useDispatch();
    const handleChangeMode = () => {
        dispatch(changeMode(`${mode === "light" ? "dark" : "light"}`));
    };
    return (
        <AppBar position="static">
            <Toolbar sx={{ width: "89%", margin: "0 auto", padding: 0 }}>
                {/**Logo */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                    flexGrow={1}
                >
                    <img
                        src={Logo}
                        alt="logo-came"
                        style={{ width: "40px", height: "40px" }}
                    />
                    <Typography variant="h6">CAME</Typography>
                </Box>

                {/**Action */}
                <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>
                    {ListMenu.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                variant="text"
                                sx={{ color: "text.primary" }}
                                href="#about"
                            >
                                {item}
                            </Button>
                        );
                    })}
                    <Divider orientation="vertical" flexItem />
                    <IconButton onClick={handleChangeMode}>
                        {mode === "light" ? <LightMode /> : <DarkMode />}
                    </IconButton>
                    <CustomButton variant="contained">Download CV</CustomButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
