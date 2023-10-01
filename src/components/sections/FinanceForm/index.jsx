import { useState } from "react";
import { Input } from "../../form/Input";
import { Select } from "../../form/Select";
import { Button } from "../../Button";
import styles from "./style.module.scss"

export const FinanceForm = ({ addValue }) => {
  const [description, setDescription] = useState("");
  const [valuePosted, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("entrada");

  const submit = (e) => {
    e.preventDefault();

    addValue(description, valuePosted, typeValue);

    setDescription("");
    setValue("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submit} className={styles.formBox}>
        <Input
          label="Descrição"
          placeholder="Digite sua descrição"
          type="text"
          id="description"
          value={description}
          setValue={setDescription}
        />
        <span className="textForm example">Ex: Compra de roupas</span>

        <Input
          label="Valor (R$)"
          placeholder="1"
          type="text"
          id="value"
          value={valuePosted}
          setValue={setValue}
        />

        <Select
          label="Tipo de valor"
          id="typeValue"
          value={typeValue}
          setValue={setTypeValue}
        >
          <option value="entrada" >Entrada</option>
          <option value="despesa" >Despesa</option>
        </Select>

        <Button type="submit" textBtn="Inserir valor" />
      </form>
    </div>
  )
};
