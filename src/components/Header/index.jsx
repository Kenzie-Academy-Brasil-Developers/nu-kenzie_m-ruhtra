import nuKenzieLogo from "../../assets/nuKenzieLogo.png";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerBox}>
      <img className={styles.logo} src={nuKenzieLogo} alt="NuKenzie Logo" />
    </div>
  )
};
