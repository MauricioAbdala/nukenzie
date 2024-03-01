import { ControlCard } from "./ControlCard";
import styles from "./style.module.scss";

export const ControlList = ({ noteList, removeNote }) => {


    return (
        <div className={styles.controlList}>
            <h2 className="title one">Resumo financeiro</h2>

            {noteList.length > 0 ? (
                <ul>
                    {noteList.map((note) => (
                        <ControlCard
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            value={note.value}
                            selectedType={note.selectedType}
                            removeNote={removeNote}
                        />
                    ))}
                </ul>
            ) : (
                <p className="title ">Você ainda não possui nenhum lançamento</p>
            )}
        </div>
    );
};

