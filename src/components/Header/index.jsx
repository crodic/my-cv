import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import Logo from "../../assets/images/came.svg";
import {
    Close,
    DarkMode,
    LibraryAdd,
    LightMode,
    Menu,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { stateApp } from "../../redux/selector";
import { changeMode } from "../../redux/slice/appSlice";
import styled from "@emotion/styled";
import { useState } from "react";

const ListMenu = ["About", "Work", "Testimonials", "Contact"];

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#030712" : "#ffffff",
    color: theme.palette.mode === "light" ? "#ffffff" : "#030712",
    "&:hover": {
        backgroundColor: theme.palette.mode === "light" ? "#6b7280" : "#9ca3af",
    },
}));

const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const { mode } = useSelector(stateApp);
    const dispatch = useDispatch();
    const handleChangeMode = () => {
        dispatch(changeMode(`${mode === "light" ? "dark" : "light"}`));
    };
    const toggleDrawer = (_, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawer(open);
    };
    return (
        <>
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
                        <CustomButton variant="contained">
                            Download CV
                        </CustomButton>
                    </Box>
                    <Box sx={{ display: { xs: "block", lg: "none" } }}>
                        <IconButton onClick={toggleDrawer(drawer, true)}>
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={toggleDrawer(drawer, false)}
            >
                <Box
                    sx={{
                        width: "325px",
                    }}
                    role="presentation"
                >
                    <List>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingX: "32px",
                                paddingY: "8px",
                            }}
                        >
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
                            <Box>
                                <IconButton
                                    sx={{ textAlign: "right", width: "auto" }}
                                    onClick={toggleDrawer(drawer, false)}
                                    onKeyDown={toggleDrawer(drawer, false)}
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                        </Box>
                        {ListMenu.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    onClick={toggleDrawer(drawer, false)}
                                    onKeyDown={toggleDrawer(drawer, false)}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LibraryAdd />
                                        </ListItemIcon>
                                        <ListItemText>{item}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                        <Divider variant="middle" />
                        <ListItem onClick={handleChangeMode}>
                            <ListItemButton>
                                <ListItemText>Switch Theme</ListItemText>
                                <ListItemIcon>
                                    {mode === "light" ? (
                                        <LightMode />
                                    ) : (
                                        <DarkMode />
                                    )}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <CustomButton variant="contained" fullWidth>
                                Download CV
                            </CustomButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
