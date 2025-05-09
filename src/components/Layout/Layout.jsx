import style from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import React from "react";

const Layout = () => {
    return (
        <header className={style.headder}>
            <AppBar />
        </header>
    );
};

export default Layout;
