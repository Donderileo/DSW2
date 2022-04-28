import styles from "../styles/professional.module.css";

function Professional(props) {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <p className={styles.nome}>{props.nome}</p>
      <p className={styles.area}>
        Area: <span>{props.area}</span>
      </p>
      <p className={styles.descricao}>{props.descricao}</p>
    </div>
  );
}

export default Professional;
