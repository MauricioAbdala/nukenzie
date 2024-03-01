import styles from "./style.module.scss";

export const ControlValue = ({ controlValue }) => {
    return (
        <div className={styles.valueBox}>
            <div className={styles.valueBox2} >
                <h3 className="title one">Valor Total:</h3>
                <p className="title pink" >{controlValue}</p>
            </div>
            <p className={styles.parag}>O valor se refere ao saldo</p>
        </div>
    );
};