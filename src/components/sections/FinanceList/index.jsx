import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({listValues, removeValue}) => {
  return (
    <div className={styles.container}>
      <h3 className="title three">Resumo Financeiro</h3>

      {listValues.length > 0 ? (
        <ul className={styles.containerCards}>
          {listValues.map((value) => {
            const {description, valueConverted, typeValue, id} = value;
            return (
              <FinanceCard 
              key={id} 
              id={id}
              description={description} 
              valueConverted={valueConverted} 
              typeValue={typeValue}
              removeValue={removeValue}
              />
              )
            })}
        </ul>
      ) :
        <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
      }
    </div>
  )
};
