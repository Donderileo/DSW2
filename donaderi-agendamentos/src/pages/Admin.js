import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";
import { makeFetch } from "../modules/api.service";
import styles from "../styles/admin.module.css";

function Admin() {
  const [clients, setClients] = useState([]);
  const [professionals, setProfessionals] = useState([]);

  async function getUsers() {
    var [responseClients, responseProfessionals] = await Promise.all([
      makeFetch({}, "/clientGet"),
      makeFetch({}, "/professionalGet"),
    ]);
    setClients(responseClients.clients);
    setProfessionals(responseProfessionals.professionals);
  }

  function handleEditClient(client) {}

  function handleEditProfessional(professional) {}

  async function handleDeleteClient(client) {
    const user_id = client.user_id;
    const { value: password } = await Swal.fire({
      input: "password",
      inputLabel: "password***",
      inputPlaceholder: "Entre com o password para prosseguir",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    });
    if (password) {
      const x = await makeFetch(
        { user: user_id, password: password },
        "/user",
        "DELETE"
      );
      window.location.reload();
    }
  }
  async function handleDeleteProfessional(professional) {
    const user_id = professional.user_id;
    const { value: password } = await Swal.fire({
      input: "password",
      inputLabel: "Entre com o password para prosseguir",
      inputPlaceholder: "password",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    });
    if (password) {
      await makeFetch({ user: user_id, password: password }, "/user", "DELETE");
      window.location.reload();
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.client_table}>
        <div className={styles.title}>Clientes:</div>
        <div className={styles.header}>
          <div className={styles.item}>Nome</div>
          <div className={styles.item}>Idade</div>
          <div className={styles.item}>Ações</div>
        </div>
        {clients.map((client, id) => (
          <div className={styles.line} key={id}>
            <div className={styles.items}>
              <div className={styles.item}>{client.name}</div>
              <div className={styles.item}>{client.age}</div>
            </div>
            <div className={styles.acoes}>
              <FaEdit
                onClick={() => {
                  handleEditClient(client);
                }}
              />
              <IoIosCloseCircleOutline
                onClick={() => {
                  handleDeleteClient(client);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.professional_table}>
        <div className={styles.title}>Profissionais:</div>
        <div className={styles.header}>
          <div className={styles.item}>Nome</div>
          <div className={styles.item}>Area</div>
          <div className={`${styles.item} ${styles.description}`}>
            description
          </div>
          <div className={styles.item}>Ações</div>
        </div>
        {professionals.map((professional, id) => (
          <div className={styles.line} key={id}>
            <div className={styles.items}>
              <div className={styles.item}>{professional.name}</div>
              <div className={styles.item}>{professional.area}</div>
              <div className={`${styles.item} ${styles.description}`}>
                {professional.description}
              </div>
            </div>
            <div className={styles.acoes}>
              <FaEdit
                onClick={() => {
                  handleEditProfessional(professional);
                }}
              />
              <IoIosCloseCircleOutline
                onClick={() => {
                  handleDeleteProfessional(professional);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
