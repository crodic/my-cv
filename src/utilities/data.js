import FigureStore from '/src/assets/images/figurestore.png';
import Portfolio from '/src/assets/images/Portfolio.png';
import TMDB from '/src/assets/images/tmdb.png';
import Javascript from '../assets/images/icon-javscript.svg';
import Tailwind from '../assets/images/icon-tailwindcss.svg';
import ReactIcon from '../assets/images/icon-react.svg';
import NextJS from '../assets/images/icon-nextjs.svg';
import Figma from '../assets/images/icon-figma.svg';
import NodeJS from '../assets/images/icon-nodejs.svg';
import ExpressJS from '../assets/images/icon-express.svg';
import ExpressJS2 from '../assets/images/icon-express2.svg';
import MongoDB from '../assets/images/icon-mongodb.svg';
import MaterialUI from '../assets/images/materialUI.png';
import JWT from '../assets/images/jwt-3.svg';
import StyledComponent from '../assets/images/sc.png';
import SASS from '../assets/images/icon-sass.svg';

// Data Project
export const dataProject = [
    {
        key: 1,
        title: 'Website bán mô hình figure Nhật Bản',
        description:
            'Đây là dự án website MERN stack đầu tiên của tôi, dự án này áp dụng toàn bộ kiến thức về ReactJS mà tôi đã học, cùng với 1 API cơ bản mà tôi dùng NodeJS, ExpressJS, MongoDB để viết lên. VÌ LÝ DO SERVER NÊN HIỆN TẠI WEBSITE CHƯA ĐƯỢC PUBLIC',
        image: FigureStore,
        linkPage: null,
        linkCode: 'https://github.com/Crodic/came-client',
        tags: ['ReactJS', 'Tailwind CSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    },
    {
        key: 3,
        title: 'Portfolio',
        description:
            'Đây là website tôi làm ra để giới thiệu bản thân, đồng thời cũng là 1 CV website để hiển thị những kỹ năng và công nghệ tôi đã học được trong quá trình tự học. Trang web sẽ tiếp tục được cập nhật trong tương lai để hoàn thiện hơn',
        image: Portfolio,
        linkPage: 'https://crodic.id.vn',
        linkCode: 'https://github.com/Crodic/my-cv',
        tags: ['ReactJS', 'Material UI', 'Dark Mode', 'Light Mode'],
    },
];

export const dataSkill = [
    { key: 1, icon: Javascript, value: 'Javascript' },
    { key: 2, icon: ReactIcon, value: 'ReactJS' },
    { key: 3, icon: NextJS, value: 'NextJS' },
    { key: 4, icon: Tailwind, value: 'Tailwindcss' },
    { key: 5, icon: Figma, value: 'Figma' },
    { key: 6, icon: NodeJS, value: 'NodeJS' },
    { key: 7, icon: ExpressJS, value: 'ExpressJS', extraIcon: ExpressJS2 },
    { key: 8, icon: MongoDB, value: 'MongoDB' },
    { key: 9, icon: MaterialUI, value: 'Material UI' },
    { key: 10, icon: JWT, value: 'JWT' },
    { key: 11, icon: SASS, value: 'Sass' },
    { key: 12, icon: StyledComponent, value: 'JSS' },
];
