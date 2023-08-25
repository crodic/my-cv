import styled from "@emotion/styled";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import Javascript from "../../../../assets/images/icon-javscript.svg";
import Tailwind from "../../../../assets/images/icon-tailwindcss.svg";
import ReactIcon from "../../../../assets/images/icon-react.svg";
import NextJS from "../../../../assets/images/icon-nextjs.svg";
import Figma from "../../../../assets/images/icon-figma.svg";
import NodeJS from "../../../../assets/images/icon-nodejs.svg";
import ExpressJS from "../../../../assets/images/icon-express.svg";
import ExpressJS2 from "../../../../assets/images/icon-express2.svg";
import MongoDB from "../../../../assets/images/icon-mongodb.svg";
import MaterialUI from "../../../../assets/images/materialUI.png";
import JWT from "../../../../assets/images/jwt-3.svg";
import MySQL from "../../../../assets/images/mysql.png";
import StyledComponent from "../../../../assets/images/sc.png";
import SASS from "../../../../assets/images/icon-sass.svg";

const SkillLayout = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    margin: "50px auto",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
}));

const SkillItem = styled(Box)`
    width: 90px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img: {
        transition: all 1s linear;
    }

    &:hover img {
        transform: scale(1.1);
        transform: translateY(-10px);
    }
`;

const dataSkill = [
    { key: 1, icon: Javascript, value: "Javascript" },
    { key: 2, icon: ReactIcon, value: "ReactJS" },
    { key: 3, icon: NextJS, value: "NextJS" },
    { key: 4, icon: Tailwind, value: "Tailwindcss" },
    { key: 5, icon: Figma, value: "Figma" },
    { key: 6, icon: NodeJS, value: "NodeJS" },
    { key: 7, icon: ExpressJS, value: "ExpressJS", extraIcon: ExpressJS2 },
    { key: 8, icon: MongoDB, value: "MongoDB" },
    { key: 9, icon: MaterialUI, value: "Material UI" },
    { key: 10, icon: JWT, value: "JWT" },
    { key: 11, icon: MySQL, value: "MySQL" },
    { key: 12, icon: SASS, value: "Sass" },
    { key: 13, icon: StyledComponent, value: "JSS" },
];

const Skill = () => {
    const theme = useTheme();
    return (
        <SkillLayout>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Chip
                    label="Skills"
                    sx={{
                        marginTop: "96px",
                        paddingX: "20px",
                        fontWeight: 500,
                        fontSize: "14px",
                    }}
                />
            </Box>
            <Typography variant="body2" textAlign="center">
                Các Kỹ Năng & Công Nghệ Tôi Đã Tiếp Xúc Và Thực Hành:
            </Typography>
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                    justifyContent: { xs: "space-around", lg: "flex-start" },
                    margin: "0 auto",
                    paddingTop: "50px",
                }}
            >
                {dataSkill.map((item) => {
                    return (
                        <SkillItem key={item.key}>
                            <img
                                src={
                                    item.extraIcon &&
                                    theme.palette.mode === "light"
                                        ? item.extraIcon
                                        : item.icon
                                }
                                style={{
                                    width: "100%",
                                    height: "70px",
                                    cursor: "pointer",
                                }}
                            />
                            <span>{item.value}</span>
                        </SkillItem>
                    );
                })}
            </Box>
        </SkillLayout>
    );
};

export default Skill;
