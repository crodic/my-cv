import styled from "@emotion/styled";
import { Box, Chip, Typography } from "@mui/material";
import Profile2 from "../../../../assets/images/profile2.png";

const AboutLayout = styled(Box)(({ theme }) => ({
    marginTop: "93px",
    paddingBottom: "50px",
    justifyContent: "space-around",
    backgroundColor: theme.palette.mode === "light" ? "#e5e7eb" : "#374151",
}));

const AboutImage = styled(Box)(({ theme }) => ({
    width: "400px",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },

    "& img": {
        boxShadow:
            theme.palette.mode === "light"
                ? "-40px 40px 5px black"
                : "-40px 40px 5px white",
        width: "400px",
        height: "480px",
        [theme.breakpoints.down("lg")]: {
            boxShadow:
                theme.palette.mode === "light"
                    ? "0px 17px 5px 5px black"
                    : "0px 17px 5px 5px white",
            margin: "0 auto",
            width: "240px",
            height: "320px",
        },
    },
}));

const About = () => {
    return (
        <AboutLayout id="about">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Chip
                    label="About Me"
                    sx={{
                        marginTop: "96px",
                        paddingX: "20px",
                        fontWeight: 500,
                        fontSize: "14px",
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginY: "48px",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        lg: "row",
                    },
                    gap: "48px",
                    justifyContent: "space-around",
                }}
            >
                <AboutImage>
                    <img
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.15752-9/368397681_2535006403340173_6447416979150528684_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FWpjPRbRUfUAX85X85Q&_nc_oc=AQki7q6IddSrwVqg9Un9NBx3WM7sZCFpRpxOdvJKbPwtRKVXVqQvabgnyFt0MWPhXy0nC1ZqoJz4HeUVI4WyCKaQ&_nc_ht=scontent.fsgn13-3.fna&oh=03_AdQdGEmkkw_xHGp1QkP-djjsC6Kz_LsPPEr8vKdmfxRg8g&oe=650F9175"
                        alt="avatar"
                    />
                </AboutImage>

                <Box
                    sx={{
                        width: { xs: "100%", lg: "584px" },
                        paddingX: "15px",
                    }}
                >
                    <Typography variant="h5" component="h3" textAlign="center">
                        Thông Tin Về Tôi
                    </Typography>
                    <br />
                    <Typography variant="caption">
                        Tôi là một lập trình viên, tự nhận mình là người chuyên
                        phát triển{" "}
                        <span style={{ color: "red" }}>Front End ReactJS</span>.
                        Tôi rất nhiệt tình tìm hiểu các công nghệ mới để đưa nó
                        vào sản phẩm của mình. Đối với tôi, trải nghiệm người
                        dùng, cách viết mã rõ ràng, dễ đọc, hiệu suất cao là
                        những vấn đề quan trọng đối với tôi.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption">
                        Tôi bắt đầu hành trình của mình với tư cách là một nhà
                        phát triển web khi tôi đang là sinh viên năm 3 và kể từ
                        đó, tôi tiếp tục trưởng thành và phát triển với tư cách
                        là front end developer, đón nhận những thử thách mới và
                        học hỏi những công nghệ mới nhất trong suốt chặng đường.
                        Bây giờ,tôi đang tiếp tục xây dựng các ứng dụng web tiên
                        tiến bằng cách sử dụng các công nghệ hiện đại như{" "}
                        <span style={{ color: "aqua" }}>Tailwindcss</span>,{" "}
                        <span style={{ color: "red" }}>ReactJS</span>,
                        <span style={{ color: "blue" }}>Material UI</span>,
                        <span style={{ color: "green" }}> Antd</span> và nhiều
                        hơn thế nữa.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption">
                        Tôi cũng có tìm hiểu đôi chút về phía{" "}
                        <span style={{ color: "yellow" }}>
                            Backend (NodeJS, ExpressJS, MongoDB)
                        </span>{" "}
                        và có thể làm được các API end point cơ bản như CRUD, mã
                        hoá mật khẩu, JWT, sử dụng cloudinary để tải lên hình
                        ảnh,... Nhưng nó chỉ dừng ở mức cơ bản nhất
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption">
                        Trong thời gian rảnh, tôi thường học thêm những công
                        nghệ mới về Front End như Typescript, NextJS,... để cải
                        thiện kỹ năng lập trình của mình. Khi gặp các thuật toán
                        khó trong quá trình làm website mà không thể giải quyết
                        tôi thường tham khảo các câu trả lời từ StackOverFlow,
                        ChatGPT, Google Bard,...
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption">
                        Cuối Cùng, Một Số Thông Tin Nhanh Về Tôi
                    </Typography>
                    <Box sx={{ display: "flex", fontSize: "0.75rem" }}>
                        <ul>
                            <li>Front End ReactJS</li>
                            <li>Chưa Có Kinh Nghiệm Thực Tế</li>
                        </ul>
                        <ul>
                            <li>Có Khả Năng Làm Việc Nhóm</li>
                            <li>Có Khả Năng Giải Quyết Các Vấn Đề</li>
                        </ul>
                    </Box>
                    <Typography variant="caption">
                        Tôi là 1 người làm việc theo chủ nghĩa tự do và sẵn sàng
                        chia sẽ, vì vậy nếu tôi biết tôi sẽ chia sẽ với bạn khi
                        bạn cần.
                    </Typography>
                    <br />
                    <br />
                    <div style={{ textAlign: "center", width: "100%" }}>
                        <strong>Cảm Ơn Bạn Đã Đọc</strong>
                    </div>
                </Box>
            </Box>
        </AboutLayout>
    );
};

export default About;
