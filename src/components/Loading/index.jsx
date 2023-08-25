import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Backdrop open={true}>
            <CircularProgress color="success" />
        </Backdrop>
    );
};

export default Loading;
