import styled from "@emotion/styled";
import { Copyright } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";

const CustomFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "68px",
    fontSize: "14px",
    backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#111827",
    borderTop: "1px solid",
}));

const Footer = () => {
    return (
        <CustomFooter component="footer">
            <Box
                sx={{
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <span>
                    <Copyright />
                </span>
                2023
                <Divider orientation="vertical" flexItem />
                Coding with <span style={{ color: "red" }}>❤</span> by Crodic
                Crystal
            </Box>
        </CustomFooter>
    );
};

export default Footer;
