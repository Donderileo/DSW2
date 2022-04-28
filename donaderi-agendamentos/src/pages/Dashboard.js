import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
  async function deleteAppointment(appointment) {
    const requestObject = appointment;
    appointment.token = token;
    makeFetch(appointment, "/appointment", "DELETE").then((response) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Success",
      });
      window.location.reload();
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>Bem vindo {tokenObject.username}!</div>
        <div className={styles.subtitle}>Role: {tokenObject.role}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.consultas}>
          Suas consultas:
          {done &&
            appointments.length !== 0 &&
            appointments.map((appointment, id) => (
              <Appointment
                key={id}
                nome={appointment.nome}
                date={appointment.date}
                onClick={() => {
                  deleteAppointment(appointment);
                }}
              />
            ))}
          {appointments.length === 0 && <p>Você não tem consultas</p>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
