import { Router } from "express";
import { LoginController } from "./controllers/Login/LoginController";
import { RegisterController } from "./controllers/Login/RegisterController";
import { ChangePwController } from "./controllers/Login/ChangePwController";
import { CreateProfessionalController } from "./controllers/Professional/CreateProfessionalController"
import { CreateClientController } from "./controllers/Client/CreateClientController";
import { GetAllProfessionalController } from "./controllers/Professional/GetAllProfessionalController";
import { DeleteUserController } from "./controllers/Login/DeleteUserController";
import { UpdateProfessionalController } from "./controllers/Professional/UpdateProfessionalController";
import { UpdateClientController } from "./controllers/Client/UpdateClientController";
import { GetAllClientController } from "./controllers/Client/GetAllClientController";
import { CreateAppointmentController } from "./controllers/Appointments/CreateAppointmentController";
import { GetAllAppointmentController } from "./controllers/Appointments/GetAllAppointmentController";
import { DeleteAppointmentController } from "./controllers/Appointments/DeleteAppointmentController";

const routes = Router();

routes.post("/register", new RegisterController().handle)
routes.post("/login", new LoginController().handle)
routes.put("/changepw", new ChangePwController().handle)
routes.delete("/user", new DeleteUserController().handle)


routes.post("/professional", new CreateProfessionalController().handle)
routes.get("/professional", new GetAllProfessionalController().handle)
routes.put("/professional", new UpdateProfessionalController().handle)


routes.get("/client", new GetAllClientController().handle)
routes.post("/client", new CreateClientController().handle)
routes.put("/client", new UpdateClientController().handle)

routes.post("/appointment", new CreateAppointmentController().handle)
routes.get("/appointment", new GetAllAppointmentController().handle)
routes.delete("/appointment", new DeleteAppointmentController().handle)

export { routes }

