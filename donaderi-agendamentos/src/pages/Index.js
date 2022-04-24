
import React from "react"
import { Link } from "react-router-dom";
import styles from '../styles/index.module.css'
function Index() {
    
    return (
        <div className={styles.container}>
            <div className={styles.entry_card}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span className={styles.accent}>
                            DONADERI 
                        </span> AGENDAMENTOS
                    </div>
                    <div className={styles.subtitle}>
                        <p>Seja bem-vindo(a) ao nosso sistema de consultas!</p>
                    </div>
                </div>
                <div className={styles.description}>

                    <p>Aqui temos um sistema completo, onde você que é um paciente poderá consultar diversos profissionais das mais variadas areas, verificar suas respectivas disponibilidades e até mesmo agendar uma consulta.</p>
                    <p>Já voce que é um profissional autonomo, poderá disponibilizar seu horario, e aguardar pelo agendamento de consulta de nossos clientes.</p>

                </div>

                <div className={styles.btn__entrar} >
                    <Link to='/login'>
                            Acessar o sistema
                    </Link>
                </div>
            </div>
            <div className={styles.icon}>
                <img src="undraw_index.svg" alt="doctors"/>
            </div>
        </div>
        
    )
}

export default Index;