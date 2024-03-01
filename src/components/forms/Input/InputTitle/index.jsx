import styles from "./style.module.scss";

export const InputTitle = ({ label, id, type, placeholder, required, value, setValue }) => {



    return (
        <div className={styles.inputBox} >
            <label className="title2 one" htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onChange={(event) => setValue(event.target.value)}
                required={required}
            />
            <p className="title2 two">Ex: Compra de roupas</p>
        </div>
    );
};

