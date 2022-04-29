import { useEffect, useState } from "react";
import { makeFetch } from "../modules/api.service";
import styles from "../styles/account.module.css";


function ClientEdit(props) {
  const [dado, setDado] = useState(null)
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState("")
  useEffect(() => {
    makeFetch(
      {
        token: props.token,
        user_id: props.id,
      },
      "/clientGet"
    ).then((response) => {
      console.log(response)
      setDado(response.client)
      setNewName(response.client.name)
      setNewAge(response.client.age)

    })
  }, [])

  // token, name, age, user_id
  function handleEdit() {
    console.log(newAge)
    makeFetch({
      user_id: props.id,
      token: props.token,
      age: newAge,
      name: newName
    }, "/client", 'PUT').then((response) => {
      console.log(response.client)
      window.location.reload()
    })
  }
  return dado && <div className={styles.container}>
    <form>
      <label className={styles.title}>Nome: </label>
      <input type="text" value={newName} onChange={((e) => setNewName(e.target.value))} />

      <label className={styles.title}>Idade: </label>
      <input type="text" value={newAge} onChange={((e) => setNewAge(e.target.value))} />

      <input type="submit" value="Enviar" onClick={handleEdit} />
    </form>
  </div>;
}

export default ClientEdit