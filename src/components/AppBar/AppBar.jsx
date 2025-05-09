import React from "react";
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import style from "./AppBar.module.css";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={`${style.nav} container`}>
            <ul className={style.list}>
                <li>
                    <Navigation />
                </li>
                <li className={style.menuNav}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
            </ul>
        </nav>
    );
};

export default AppBar;
