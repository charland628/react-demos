import { Outlet } from "react-router-dom";
import Header from '../components/organisms/Header/header.js';
import './layout.css';

const Layout = () => {
    return (
        <div className="app">
            <Header />

            <Outlet />
        </div>
    );
};

export default Layout;
