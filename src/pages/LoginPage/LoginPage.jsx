import style from "./LoginPage.module.css";
import RegisterForm from "../../components/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className={style.block}>
            <h2 className={style.title}>Login</h2>
            <RegisterForm />
        </div>
    );
};

export default Login;
