import styled from "@emotion/styled";
import { Box, Chip, Typography } from "@mui/material";
import CardProject from "../CardProject";
import { dataProject } from "../../../../utilities/data";

const ProjectLayout = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    margin: "150px 0px auto",
    justifyContent: "space-around",
    paddingBottom: "50px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.mode === "light" ? "#e5e7eb" : "#374151",
}));

const Project = () => {
    return (
        <ProjectLayout id="project">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Chip
                    label="Projects"
                    sx={{
                        marginTop: "96px",
                        paddingX: "20px",
                        fontWeight: 500,
                        fontSize: "14px",
                    }}
                />
            </Box>
            <Typography variant="body2" textAlign="center">
                Những Dự Án Tôi Đã Thực Hiện
            </Typography>
            <Box
                sx={{
                    width: "90%",
                    margin: "20px 0px auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                {dataProject?.map((project) => {
                    return <CardProject data={project} key={project.key} />;
                })}
            </Box>
        </ProjectLayout>
    );
};

export default Project;
