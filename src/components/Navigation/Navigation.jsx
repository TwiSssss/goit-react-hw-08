import React from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
            <NavLink className={style.link} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={style.link} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </>
    );
};

export default Navigation;
