import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.devs}>
          <div className={styles.dev_title}>
            Developed by
          </div>
          <div className={styles.dev_list}>
            <div className={styles.dev}>
              <img src="https://avatars.githubusercontent.com/u/40279487?v=4" alt="reynold profile picture"/>
              <a className="github" href="https://github.com/vitordonadelli" target="__blank">Vitor</a>
            </div>
            <div className={styles.dev}>
              <img src="https://avatars.githubusercontent.com/u/33060591?v=4" alt="reynold profile picture"/>
              <a className={styles.github} href="https://github.com/donderileo" target="__blank">Leonardo</a>
            </div>
            <div className={styles.dev}>
              <img src="https://avatars.githubusercontent.com/u/37456066?v=4" alt="reynold profile picture"/>
              <a className={styles.github} href="https://github.com/reynold125" target="__blank">Reynold</a>
            </div>
            <div className={styles.dev}>
              <img src="https://avatars.githubusercontent.com/u/21988834?v=4" alt="reynold profile picture"/>
              <a className={styles.github} href="https://github.com/thiagomtt" target="__blank">Thiago</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer