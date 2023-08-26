import FigureStore from "/src/assets/images/myCV.png";
import Portfolio from "/src/assets/images/Portfolio.png"
import TMDB from "/src/assets/images/tmdb.png"

// Data Project
export const dataProject = [
    {
        key: 1,
        title: "Figure Store",
        description: "Đây là dự án website MERN stack đầu tiên của tôi, dự án này áp dụng toàn bộ kiến thức về ReactJS mà tôi đã học, cùng với 1 API cơ bản mà tôi dùng NodeJS, ExpressJS, MongoDB để viết lên. VÌ LÝ DO SERVER NÊN HIỆN TẠI WEBSITE CHƯA ĐƯỢC PUBLIC",
        image: FigureStore,
        linkPage: null,
        linkCode: "https://github.com/Crodic/came-client",
        tags: [
            "ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "MongoDB"
        ]
    },
    {
        key: 2,
        title: "The Movie",
        description: "Đây là trang web lần đầu tiên tôi thực hiện với 1 API lớn (TMDB). Tuy trang web chỉ hoàn thiện 50% nhưng tôi học được rất nhiều thứ khi thực hiện làm trang web này. Và vì đây là 1 API công khai nên tôi chỉ làm các chức năng GET thông thường trong dự án này",
        image: TMDB,
        linkPage: "https://tmdb-movie-liard.vercel.app/",
        linkCode: "https://github.com/Crodic/tmdb-movie",
        tags: [
            "ReactJS", "ANTD", "API TMDB", "Fire Base",
        ]
    },
    {
        key: 3,
        title: "Portfolio",
        description: "Đây là website tôi làm ra để giới thiệu bản thân, đồng thời cũng là 1 CV website để hiển thị những kỹ năng và công nghệ tôi đã học được trong quá trình tự học. Trang web sẽ tiếp tục được cập nhật trong tương lai để hoàn thiện hơn",
        image: Portfolio,
        linkPage: "https://crodic.id.vn",
        linkCode: "https://github.com/Crodic/my-cv",
        tags: [
            "ReactJS", "Material UI", "Dark Mode", "Light Mode"
        ]
    },
]