import { useState } from "react";
import { Header } from "../../components/Header"
import { FinanceForm } from "../../components/sections/FinanceForm"
import { FinanceList } from "../../components/sections/FinanceList"
import { TotalSection } from "../../components/sections/TotalSection";
import styles from "./styles.module.scss";

export const HomePage = () => {
  const [listValues, setListValues] = useState([]);

  const addValue = (description, valuePosted, typeValue) => {
    const id = crypto.randomUUID();
    const valueConverted = parseInt(valuePosted);
    const newValue = { description, valueConverted, typeValue, id };

    setListValues([...listValues, newValue]);
  };

  const removeValue = (id) => {
    const listValuesFiltered = listValues.filter((value) => {
      return value.id !== id && value
    });

    setListValues(listValuesFiltered);
  };
  
  return (
    <>
      <Header />
        <main className={styles.containerMain}>
          <div>
          <FinanceForm addValue={addValue} />

          {listValues.length > 0 && (
            <TotalSection listValues={listValues}/>
          )}
          </div>
      
          <div>
          <FinanceList listValues={listValues} removeValue={removeValue} />
          </div>

      </main>
    </>
  )
};
