import { FastifyInstance } from "fastify";
import {
  CreatePersonController,
  DeletePersonController,
  GetAllPersonsController,
  GetPersonController,
  ListPersonsController,
  UpdatePersonController,
} from "../../person/controller";

const createPersonController = new CreatePersonController();
const listPersonsController = new ListPersonsController();
const deletePersonController = new DeletePersonController();
const getPersonController = new GetPersonController();
const updatePersonController = new UpdatePersonController();
const getAllPersonsController = new GetAllPersonsController();

export async function miraRoutes(app: FastifyInstance) {
  app.post("/", createPersonController.handle);
  app.get("/", listPersonsController.handle);
  app.get("/:id", getPersonController.handle);
  app.get("/all", getAllPersonsController.handle);
  app.put("/:id", updatePersonController.handle);
  app.delete("/:id", deletePersonController.handle);
}
