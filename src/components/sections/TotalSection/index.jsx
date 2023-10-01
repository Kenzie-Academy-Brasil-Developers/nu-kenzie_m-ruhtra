import styles from "./style.module.scss";

export const TotalSection = ({ listValues }) => {

  const totalValue = listValues.reduce((prevValue, value) => {
    return value.typeValue === "entrada" ?
      (
        prevValue + value.valueConverted
      ) : (
        prevValue - value.valueConverted
      )
  }, 0);

  const totalValueFormated = totalValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  return (
    <div className={styles.container}>
      <div className={styles.divValue}>
        <h3 className="title three">Valor: </h3>
        <p className="title value">{totalValueFormated}</p>
      </div>
      <p className="text body">O valor se refere ao saldo</p>
    </div>
  )
};
