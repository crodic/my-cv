import {
    Box,
    Chip,
    IconButton,
    Link,
    Paper,
    Tooltip,
    Typography,
} from "@mui/material";
import { Source } from "@mui/icons-material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import styled from "@emotion/styled";

const CustomPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "480px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    padding: "48px",

    "& img": {
        width: "480px",
        height: "100%",
        objectFit: "fill",
    },

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        height: "auto",
        padding: "20px",

        "& img": {
            width: "100%",
            height: "100%",
        },

        "& .mobile-image": {
            width: "100%",
        },

        "& .wrapper-content": {
            width: "100%",
        },
    },
}));

const CardProject = ({ data }) => {
    return (
        <CustomPaper elevation={3}>
            <Box
                sx={{
                    width: "50%",
                    height: "100%",
                }}
                className="mobile-image"
            >
                <img src={data.image} />
            </Box>
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 3,
                    height: "100%",
                }}
                className="wrapper-content"
            >
                <Typography variant="h4" component="h3">
                    {data.title}
                </Typography>
                <Typography variant="caption">{data.description}</Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {data?.tags?.map((chip, index) => {
                        return <Chip label={chip} key={`crodic-${index}`} />;
                    })}
                </Box>
                {data.linkPage && (
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                        }}
                    >
                        <IconButton href={data.linkPage} target="_blank">
                            <CallMissedOutgoingIcon />
                        </IconButton>
                        <Link
                            href={data.linkPage}
                            sx={{
                                color: "blue",
                            }}
                            target="_black"
                        >
                            Xem Trang Tại Đây
                        </Link>
                    </Box>
                )}
                {data.linkCode && (
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: "center",
                        }}
                    >
                        <Tooltip title="Source Code">
                            <IconButton href={data.linkCode} target="_blank">
                                <Source />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            </Box>
        </CustomPaper>
    );
};

export default CardProject;
