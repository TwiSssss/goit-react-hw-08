import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import style from "./LoginForm.module.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: "",
        password: "",
    };
    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values));
        console.log(values);
    };
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={style.form}>
                    <Field type="email" name="email" placeholder="Email" className={style.input} required />
                    <Field type="password" name="password" placeholder="Password" className={style.input} required />
                    <button type="submit" className={style.button}>
                        Log In
                    </button>
                </Form>
            </Formik>
        </>
    );
};
export default LoginForm;
