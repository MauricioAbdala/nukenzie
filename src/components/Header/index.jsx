import Logo from "../../assets/logo.png";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.myheader}>
            <div className={styles.container}>
                <img src={Logo} alt="logo" />
            </div>
        </header>
    );
};