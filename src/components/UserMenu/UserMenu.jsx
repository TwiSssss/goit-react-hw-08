import React from "react";
import style from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const handleLogOut = () => {
        dispatch(logoutThunk());
    };
    return (
        <>
            <p className={style.userName}>{userName}</p>
            <button onClick={handleLogOut} className={style.button}>
                Log Out
            </button>
        </>
    );
};

export default UserMenu;
