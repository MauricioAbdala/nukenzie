import styles from "./style.module.scss";

export const ControlCard = ({ title, id, value, selectedType, removeNote }) => {


    return (

        <li className={`${styles.box} ${selectedType === "Entrada" ? styles.green : styles.grey}`}>
            <div className="flexBoxTotal">
                <div className="flexBox">
                    <h2 className="title one">{title}</h2>
                    <p className="title2 one">R$ {value}</p>
                </div>
                <div className="flexBox">
                    <p className="title2 one">{selectedType}</p>
                    <button className={styles.btn} onClick={() => removeNote(id)} >Excluir</button>
                </div>
            </div>
        </li>
    );
};