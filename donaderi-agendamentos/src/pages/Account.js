import styles from "../styles/account.module.css";

function Account() {
  // Fetch nas infos com o user_id que ta no token (usa o parseJwt da utils)
  //Faz os forms preenche e poe um useState pra cada, inicializa eles com os dados da api
  //Clicou no botão faz um put pra api
  // - /client
  /*{
    "user_id":"5ba3c76e-51bf-4fca-a59e-4d13d6f73281",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTNjNzZlLTUxYmYtNGZjYS1hNTllLTRkMTNkNmY3MzI4MSIsInVzZXJuYW1lIjoiY2xpZW50IiwiaWF0IjoxNjQ0MzY5NDg0fQ.DaNDh4-8M_kA8OCdDqOjn61amie4Ab6Vb2p-3obFjGM",
    "name": "AAAAAAAAAAAAAAAAAA"	
  }*/
  // - /professional
  /*
  {
		"user_id": "2e15512a-cab9-4675-a761-ddac088f4639",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJlMTU1MTJhLWNhYjktNDY3NS1hNzYxLWRkYWMwODhmNDYzOSIsInVzZXJuYW1lIjoicHJvZmVzc2lvbmFsIiwiaWF0IjoxNjQ0MzY3Mzg3fQ.lKZaw6fW484ZvRzuWdQZezJUba8ELiZf0hbSLiimeQE",
	"name": "Professional", 
	"area": "DI", 
	"description": "Grandes consultorias o tempo todo" 
  }
  */
  //makefetch(body, url, "PUT")
  return <div className={styles.container}>Account</div>;
}

export default Account;
