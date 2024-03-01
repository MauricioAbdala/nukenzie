import styles from "./style.module.scss";

export const InputValue = ({ label, id, type, placeholder, required, value, setValue, step, inputMode }) => {


    return (

        <div className={styles.inputBox}>
            <label className="title2 one" htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onChange={(event) => setValue(event.target.value)}
                required={required}
                step={step}
                inputMode={inputMode}
            />
        </div>
    );
};