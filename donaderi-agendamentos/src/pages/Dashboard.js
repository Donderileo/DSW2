import { useEffect, useState } from "react";
import Appointment from "../components/Appointment";
import { makeFetch } from "../modules/api.service";
import { parseJwt } from "../modules/utils";
import styles from "../styles/dashboard.module.css";

function Dashboard() {
  const token = localStorage.getItem("token");
  const tokenObject = parseJwt(token);
  const [appointments, setAppointments] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    makeFetch(
      {
        token: token,
      },
      "/appointmentGet"
    ).then((appointments) => {
      setAppointments(appointments.appointments);
    });
  }, []);

  useEffect(() => {
    appointments.forEach((appointment, index) => {
      if (tokenObject.role === "Professional") {
        makeFetch({ user_id: appointment.client_id }, "/clientGet").then(
          (response) => {
            appointment.nome = response.client.name;
            if (index === appointments.length - 1) {
              setDone(true);
            }
          }
        );
      } else if (tokenObject.role === "Client") {
        makeFetch(
          { user_id: appointment.professional_id },
          "/professionalGet"
        ).then((response) => {
          appointment.nome = response.professional.name;
          if (index === appointments.length - 1) {
            setDone(true);
          }
        });
      }
    });
  }, [appointments]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Bem vindo {tokenObject.username}!</div>
      <div className={styles.subtitle}>Role: {tokenObject.role}</div>

      <div className={styles.consultas}>Suas últimas consultas:</div>
      {done &&
        appointments.length !== 0 &&
        appointments.map((appointment) => (
          <Appointment
            key={appointment}
            nome={appointment.nome}
            date={appointment.date}
          />
        ))}
    </div>
  );
}

export default Dashboard;
