import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import { refreshThunk } from "./redux/auth/operations";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/LoginPage";
import Registration from "./pages/RegistrationPage/RegistrationPage";
import Contacts from "./pages/ContactsPage/ContactsPage";

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);
    return isRefreshing ? null : (
        <>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<RestrictedRoute component={<Home />} redirectTo="/contacts" />} />
                </Route>
                <Route path="/login" element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />} />
                <Route path="/register" element={<RestrictedRoute component={<Registration />} redirectTo="/contacts" />} />
                <Route
                    path="contacts"
                    element={
                        <PrivateRoute>
                            <Contacts />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};
