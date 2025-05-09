import React from "react";
import style from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
    return (
        <>
            <NavLink className={style.link} to="/login">
                Login
            </NavLink>
            <NavLink className={style.link} to="/register">
                Registration
            </NavLink>
        </>
    );
};

export default AuthNav;
