import styled from "@emotion/styled";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { dataSkill } from "../../../../utilities/data";

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

    img {
        transition: all 0.2s linear;
    }

    &:hover img {
        transform: scale(1.1);
        transform: translateY(-10px);
    }
`;

const Skill = () => {
    const theme = useTheme();
    return (
        <SkillLayout id="skills">
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
