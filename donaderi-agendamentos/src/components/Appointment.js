import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "../styles/appointmentComponent.module.css";
function Appointment(props) {
  return (
    <div className={styles.container}>
      <div className={styles.nome}>{props.nome}</div>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.icon} onClick={props.onClick}>
        <IoIosCloseCircleOutline />
      </div>
    </div>
  );
}

export default Appointment;
