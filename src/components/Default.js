import { BsChevronDoubleUp }  from "react-icons/bs";
import styles from "./Default.module.css";

function Default() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Which movie do you want to watch?</h1>
      <div className={styles.icons}><BsChevronDoubleUp /></div>
    </div>
  )
}
export default Default;