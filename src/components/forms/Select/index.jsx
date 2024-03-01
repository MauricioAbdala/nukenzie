import styles from "./style.module.scss";

export const Select = ({ children, label, id, required, value, setValue }) => {
    return (
        <div className={styles.flexBox} >
            <label className="title2 one" htmlFor={id}>{label}</label>
            <select
                name={id}
                id={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required={required}
            >
                {children}
            </select>
        </div>
    );
};