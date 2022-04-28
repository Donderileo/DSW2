import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { makeFetch } from "../modules/api.service";
import particularStyles from "../styles/complete.module.css";
import styles from "../styles/login.module.css";
function CompleteRegister() {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");

  function logout() {
    Swal.fire({
      title: "Atenção!",
      text: "Deseja mesmo sair ?",
      icon: "error",
      confirmButtonText: "Sim",
      confirmButtonColor: "#3b67f2",
      cancelButtonColor: "#2e3137",
      showCancelButton: true,
      cancelButtonText: "Não",
    }).then((e) => {
      if (e.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  }

  function handleChange(e) {
    setTipo(e.target.value);
    setName("");
    setArea("");
    setDescription("");
    setAge("");
  }
  const token = localStorage.getItem("token");
  function completeRegister() {
    if (tipo === "Professional") {
      makeFetch(
        { token: token, name: name, area: area, description: description },
        "/professional"
      ).then(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    } else {
      makeFetch({ token: token, name: name, age: age }, "/client").then(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={particularStyles.login}>
        <div className={particularStyles.logout}>
          <NavLink to="#" onClick={logout}>
            Logout
          </NavLink>
        </div>
        <p className={particularStyles.header}>Complete seu cadastro!</p>

        <form className={styles.formLogin}>
          <select onChange={handleChange} name="tipo" defaultValue={"DEFAULT"}>
            <option hidden value="DEFAULT">
              Select your role
            </option>
            <option value="Professional">Professional</option>
            <option value="Client">Client</option>
          </select>
          {tipo === "Professional" && (
            <>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Area"
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </>
          )}
          {tipo === "Client" && (
            <>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </>
          )}
        </form>

        <button
          className={`${particularStyles.btnEnviar}`}
          onClick={completeRegister}
        >
          Complete Register
        </button>
      </div>
    </div>
  );
}

export default CompleteRegister;
