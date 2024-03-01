import { Button } from "../Button/index.jsx";
import { InputTitle } from "../Input/InputTitle/index.jsx";
import { InputValue } from "../Input/InputValue/index.jsx";
import { Select } from "../Select/index.jsx";
import styles from "./style.module.scss";
import { useState } from "react";




export const ControlForm = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [selectedType, setSelectedType] = useState("Entrada");


    const submit = (event) => {
        event.preventDefault();
        addNote({ title, value, selectedType });
        setTitle("");
        setValue("");
        setSelectedType("Entrada");
    };

    return (
        <div className={styles.formBox}>
            <form onSubmit={submit}>
                <InputTitle
                    type="text"
                    label="Descrição"
                    placeholder="Digite aqui sua descrição"
                    id="title"
                    value={title}
                    setValue={setTitle}
                    required={true}
                />
                <InputValue
                    type="number"
                    label="Valor (R$)"
                    placeholder="1"
                    id="valor"
                    value={value}
                    setValue={setValue}
                    required={true}
                    step="0.01"
                />
                <Select
                    label="Tipo de Valor"
                    id="selected"
                    value={selectedType}
                    setValue={setSelectedType}
                    required={true}
                >
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                </Select>
                <Button
                    type="submit"
                    name="Inserir Valor"
                />
            </form >

            <div>
                <h2 className="title one" ></h2>
                <p className="title2 one"></p>
            </div>
        </div >
    );
};