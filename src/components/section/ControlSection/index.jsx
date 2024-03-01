import { ControlForm } from "../../forms/ControlForm";
import { ControlList } from "./ControlList";
import styles from "../ControlSection/style.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ControlValue } from "./ControlList/ControlValue";



export const ControlSection = () => {

    const [noteList, setNoteList] = useState([]);


    const addNote = (formData) => {
        const newNote = { ...formData, id: uuidv4() };
        setNoteList([...noteList, newNote]);

    };

    const total = noteList.reduce((prevValue, note) => {
        const noteValue = parseFloat(note.value.replace(',', '.'));
        return note.selectedType === 'Entrada' ? prevValue + noteValue : prevValue - noteValue;
    }, 0);

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


    const removeNote = (removeId) => {
        const newNoteList = noteList.filter(note => note.id !== removeId);
        setNoteList(newNoteList);
    };

    return (
        <section>
            <div className="container">
                <div className={styles.flexBox}>
                    <div>
                        <ControlForm addNote={addNote} />
                        <ControlValue controlValue={formattedTotal} />
                    </div>
                    <ControlList noteList={noteList} removeNote={removeNote} />
                </div>
            </div>
        </section>
    );
};