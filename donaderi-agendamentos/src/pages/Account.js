import ClientEdit from "../components/ClientEdit";
import ProfessionalEdit from "../components/ProfessionalEdit";
import { parseJwt } from "../modules/utils";

function Account() {
  const token = localStorage.getItem("token")
  const tokenObject = parseJwt(token)

  const role = tokenObject.role
  const id = tokenObject.id

  if (role === "Professional") {
    return <ProfessionalEdit token={token} id={id} />
  } else if (role === "Client") {
    return <ClientEdit token={token} id={id} />
  }
}

export default Account;