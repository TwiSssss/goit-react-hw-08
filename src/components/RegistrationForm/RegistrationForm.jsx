import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import style from "./RegistrationForm.module.css";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };
    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(registerThunk(values));
    };
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={style.form}>
                    <Field type="text" name="name" placeholder="Name" className={style.input} required />
                    <Field type="email" name="email" placeholder="Email" className={style.input} required />
                    <Field type="password" name="password" placeholder="Password" className={style.input} required />
                    <button type="submit" className={style.button}>
                        Sign Up
                    </button>
                </Form>
            </Formik>
        </>
    );
};
export default RegisterForm;
