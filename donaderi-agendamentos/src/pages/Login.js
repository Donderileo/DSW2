import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeLogin } from "../modules/api.service";
import styles from "../styles/login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    const login = await makeLogin({ username: username, password: password });
    if (JSON.stringify(login.user) !== "{}") {
      setError(false);
      window.localStorage.setItem("token", login.token);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  }

  function checkButton() {
    if (username !== "" && password.length > 0) {
      return false;
    }
    return true;
  }

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <p className={styles.header}>Acessar o sistema</p>
        {error && <p className={styles.error}>Usuário ou Senha inválidos</p>}
        <form className={styles.formLogin}>
          <p id="err"></p>
          <input
            id="username"
            type="text"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <a href="/register">Register</a>

        <button
          className={`${styles.btnEnviar} ${
            checkButton() ? styles.disabled : ""
          }`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
