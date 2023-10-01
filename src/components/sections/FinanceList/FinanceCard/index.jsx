import styles from "./style.module.scss";

export const FinanceCard = ({ description, valueConverted, typeValue, id, removeValue }) => {
  const valueFormated = valueConverted.toLocaleString(
    "pt-BR", { style: "currency", currency: "BRL" }
  );

  return (
    <div
      className={`
      ${styles.containerCard}
      ${typeValue === "entrada" ? styles.borderGreen : styles.borderGrey}`
      }
    >
      <div className={styles.containerInfo}>
        <h3 className="title three">{description}</h3>
        <p className="text body">{typeValue}</p>
      </div>

      <div className={styles.containerValue}>
        <p className="text body card">{valueFormated}</p>

        <button
          className={styles.btnCard}
          onClick={() => removeValue(id)}
        >
          Excluir
        </button>
      </div>
    </div>
  )
};
