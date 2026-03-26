import Navbar from "../components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import JsonUiBuilder from "../pages/JsonUiBuilder";
import Docs from "../pages/Docs";

const Layout = () => (
    <>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </>
);


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<JsonUiBuilder />} />
                <Route path="/docs" element={<Docs />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;