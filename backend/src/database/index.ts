import { createConnection } from "typeorm";


createConnection().then((con) => {
    con.synchronize();
});