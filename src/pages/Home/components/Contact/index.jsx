import styled from "@emotion/styled";
import { Facebook, GitHub, Mail, Phone, Twitter } from "@mui/icons-material";
import { Box, Chip, Link, Typography } from "@mui/material";

const ContactLayout = styled(Box)(({ theme }) => ({
    width: "80%",
    paddingBottom: "50px",
    margin: "0 auto",
}));

const CustomLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "light" ? "black" : "white",
}));

const Contact = () => {
    return (
        <ContactLayout id="contact">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <Chip
                    label="Contact Me"
                    sx={{
                        marginTop: "96px",
                        paddingX: "20px",
                        fontWeight: 500,
                        fontSize: "14px",
                    }}
                />
            </Box>
            <Typography variant="body2" textAlign="center">
                Bạn Có Thể Liên Hệ Với Tôi Khi Đang Tìm Kiếm Nhà Phát Triển
                Front End ReactJS Hoặc Đơn Giản Là Bạn Chỉ Muốn Kết Nối Chia Sẽ
                Kinh Nghiệm Với Tôi. Tôi Luôn Sẵn Lòng Chia Sẻ Những Kiến Thức
                Mà Tôi Có Cho Bạn
            </Typography>
            <br />
            <Typography
                variant="body1"
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Mail />
                <CustomLink href="mailto:alice01422@gmail.com" component="a">
                    alice01422@gmail.com
                </CustomLink>
            </Typography>
            <Typography
                variant="body1"
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    marginTop: "10px",
                }}
            >
                <Phone />
                <CustomLink href="tel:0387737544" component="a">
                    0387737544
                </CustomLink>
            </Typography>
            <br />
            <Typography
                variant="overline"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                Bạn Cũng Có Thể Tìm Tôi Trên Các Nền Tảng
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <GitHub sx={{ cursor: "pointer" }} />
                <Facebook sx={{ cursor: "pointer" }} />
                <Twitter sx={{ cursor: "pointer" }} />
            </Box>
        </ContactLayout>
    );
};

export default Contact;
