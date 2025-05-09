import style from "./HomePage.module.css";

const Home = () => {
    return (
        <div className={style.block}>
            <h1 className={style.title}>Welcome!</h1>
            <p className={style.text}>To continue register or log in</p>
        </div>
    );
};

export default Home;
