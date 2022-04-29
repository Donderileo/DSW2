import { useEffect, useState } from "react";
import { makeFetch } from "../modules/api.service";
import styles from "../styles/account.module.css";


function ProfessionalEdit(props) {
  const [dado, setDado] = useState(null)

  const [newName, setNewName] = useState("")
  const [newArea, setNewArea] = useState("")
  const [newDescription, setNewDescription] = useState("")


  useEffect(() => {
    makeFetch(
      {
        token: props.token,
        user_id: props.id,
      },
      "/professionalGet"
    ).then((response) => {
      console.log(response)
      setDado(response.professional)
      setNewName(response.professional.name)
      setNewArea(response.professional.area)
      setNewDescription(response.professional.description)


    })
  }, [])

  function handleEdit() {
    makeFetch({
      user_id: props.id,
      token: props.token,
      area: newArea,
      name: newName,
      description: props.newDescription
    }, "/professional", 'PUT').then((response) => {
      console.log(response.professional)
      window.location.reload()
    })
  }

  return dado && <div className={styles.container}>
    <div className={styles.forms}>
      <form>
        <label className={styles.title}>Nome: </label>
        <input type="text" value={newName} onChange={((e) => setNewName(e.target.value))} />

        <label className={styles.title}>Area: </label>
        <input type="text" value={newArea} onChange={((e) => setNewArea(e.target.value))} />

        <label className={styles.title}>Descrição:</label>
        <input type="text" value={newDescription} onChange={((e) => setNewDescription(e.target.value))} />

        <input type="submit" value="Enviar" onClick={handleEdit} />
      </form>
    </div>
  </div>;

  return <div>
    aaa
  </div>
}

export default ProfessionalEdit