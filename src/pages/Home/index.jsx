import { Box } from "@mui/material";
import Header from "../../components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "../../components/Footer";
import Project from "./components/Project";

const HomePage = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1440px",
                    margin: "0 auto",
                    backgroundColor: "#fffff",
                }}
            >
                <Header />
                <Box
                    sx={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                    }}
                >
                    <Hero />
                    <About />
                    <Skill />
                    <Project />
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default HomePage;
