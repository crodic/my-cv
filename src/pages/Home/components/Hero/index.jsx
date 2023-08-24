import { Box, Typography } from "@mui/material";
import Profile1 from "../../../../assets/images/profile1.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MediationOutlinedIcon from "@mui/icons-material/MediationOutlined";
import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import styled from "@emotion/styled";

const HeroLayout = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "48px",
    marginTop: "96px",
    justifyContent: "space-around",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column-reverse",
    },
}));

const HeroImage = styled(Box)(({ theme }) => ({
    width: "400px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
        display: "flex",
    },
    "& img": {
        boxShadow:
            theme.palette.mode === "light"
                ? "40px 40px 5px black"
                : "40px 40px 5px white",
        [theme.breakpoints.down("lg")]: {
            boxShadow:
                theme.palette.mode === "light"
                    ? "0px 17px 5px 5px black"
                    : "0px 17px 5px 5px white",
            margin: "0 auto",
            width: "240px",
            height: "280px",
        },
    },
}));

const Hero = () => {
    return (
        <HeroLayout>
            <Box
                sx={{
                    paddingX: "20px",
                    width: {
                        xs: "100%",
                        lg: "768px",
                    },
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: {
                            xs: "36px",
                            lg: "60px",
                        },
                        textAlign: {
                            xs: "center",
                            lg: "left",
                        },
                    }}
                    fontWeight={700}
                >
                    Hi, I'm Crodic 👋
                </Typography>
                <br />
                <Typography variant="caption" component="div">
                    Tôi là một lập trình viên{" "}
                    <span style={{ color: "red" }}>Front End</span> với đam mê
                    sáng tạo và xây dựng giao diện người dùng tuyệt vời. Tôi có
                    các kiến thức cơ bản về các công cụ như{" "}
                    <span style={{ color: "#27AAE1" }}>ReactJS</span>,{" "}
                    <span style={{ color: "blue" }}>Material UI</span>,{" "}
                    <span style={{ color: "aquamarine" }}>Tailwind CSS</span>
                    ,... tôi luôn tìm cách kết hợp sự sáng tạo với kỹ thuật để
                    tạo ra những trang web thú vị và có tính tương tác cao. Đối
                    với tôi, việc biến ý tưởng thành hiện thực thông qua mã code
                    là một trải nghiệm thú vị và đầy thách thức.
                </Typography>
                <br />
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <LocationOnOutlinedIcon />
                    <Typography variant="overline">
                        Gò Dầu, Tây Ninh, Việt Nam
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <MediationOutlinedIcon color="success" />
                    <Typography variant="overline">
                        Available for new projects
                    </Typography>
                </Box>
                <br />
                <br />
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <GitHub sx={{ cursor: "pointer" }} />
                    <Facebook sx={{ cursor: "pointer" }} />
                    <Twitter sx={{ cursor: "pointer" }} />
                </Box>
            </Box>
            <HeroImage>
                <img src={Profile1} alt="avatar" />
            </HeroImage>
        </HeroLayout>
    );
};

export default Hero;
