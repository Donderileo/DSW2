import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Professional from "../components/Professional";
import { searchProfessional } from "../modules/api.service";
import styles from "../styles/professionals.module.css";
function Professionals() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    searchProfessional(nome).then((response) => {
      setProfessionals(response.professionals);
    });
  }, [nome]);

  function marcarConsulta(professional) {
    navigate(`/professionals/${professional.user_id}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.disclaimer}>
        Selecione seu <span className={styles.professional}>profissional!</span>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
      </div>
      <div className={styles.professionals}>
        {professionals.map((professional, id) => (
          <Professional
            key={id}
            nome={professional.name}
            area={professional.area}
            descricao={professional.description}
            onClick={() => {
              marcarConsulta(professional);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Professionals;
