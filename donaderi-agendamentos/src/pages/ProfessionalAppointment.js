import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Professional from "../components/Professional";
import { makeFetch } from "../modules/api.service";
import styles from "../styles/professionalAppointment.module.css";

function ProfessionalAppointment(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [professional, setProfessional] = useState({});
  const [Ok, setOk] = useState(false);
  const [consultaMarcada, setConsultaMarcada] = useState(false);
  const [horario, setHorario] = useState("");
  const [dia, setDia] = useState("");

  useEffect(() => {
    makeFetch({ user_id: id }, "/professionalGet").then((response) => {
      setProfessional(response.professional);
      setOk(true);
    });
  }, []);

  function confirmAppointment() {
    const dateTime = dia + " " + horario;
    makeFetch(
      {
        token: token,
        user_id_professional: id,
        timedate: dateTime,
      },
      "/appointment"
    ).then((response) => {
      Swal.fire({
        title: "Consulta Marcada!",
        text: "Sua cosulta está marcada, deseja vê-la ou voltar aos profissionais?",
        icon: "success",
        confirmButtonText: "Ir para as consultas",
        confirmButtonColor: "#3b67f2",
        cancelButtonColor: "#2e3137",
        showCancelButton: true,
        cancelButtonText: "Ir para os profissionais",
      }).then((e) => {
        if (e.isConfirmed) {
          navigate("/dashboard");
        } else {
          navigate("/professionals");
        }
      });
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.professional}>
        {Ok && (
          <Professional
            key={id}
            nome={professional.name}
            area={professional.area}
            descricao={professional.description}
          />
        )}
      </div>
      <div className={styles.appointment}>
        <form className={styles.formAppointment}>
          <p id="err"></p>
          <input
            type="text"
            placeholder="Dia"
            onChange={(e) => setDia(e.target.value)}
          />
          <input
            type="text"
            placeholder="Horário"
            onChange={(e) => setHorario(e.target.value)}
          />
        </form>
        <button onClick={confirmAppointment} className={styles.btnEnviar}>
          Confirmar agendamento
        </button>
      </div>
    </div>
  );
}

export default ProfessionalAppointment;
