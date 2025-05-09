import style from "./RegistrationPage.module.css";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

const Registration = () => {
    return (
        <div className={style.block}>
            <h2 className={style.title}>Register</h2>
            <RegisterForm />
        </div>
    );
};

export default Registration;
