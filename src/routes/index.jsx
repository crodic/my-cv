import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home/index"));

const AppRouter = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
