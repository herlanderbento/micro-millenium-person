import { FastifyInstance } from 'fastify';
import {
  CreatePersonController,
  DeletePersonController,
  GetAllPersonsController,
  GetPersonController,
  ListPersonsController,
  UpdatePersonAvatarController,
  UpdatePersonController,
} from '../../person/controller';
import {
  createPersonSchema,
  deletePersonSchema,
  getAllPersonsSchema,
  getPersonSchema,
  listPersonsSchema,
  updateAvatarPersonSchema,
  updatePersonSchema,
} from '../swagger';
import { CreatePersonUseCase } from '../../../core/person/application';
import { PersonPrismaRepository } from '../../../core/person/infra';


const createPersonController = new CreatePersonController(new CreatePersonUseCase(new PersonPrismaRepository()));
const listPersonsController = new ListPersonsController();
const deletePersonController = new DeletePersonController();
const getPersonController = new GetPersonController();
const updatePersonController = new UpdatePersonController();
const getAllPersonsController = new GetAllPersonsController();
const updatePersonAvatarController = new UpdatePersonAvatarController();

export async function personRoutes(app: FastifyInstance) {
  app.post('', createPersonSchema, createPersonController.handle);
  app.get('', listPersonsSchema, listPersonsController.handle);
  app.get('/:id', getPersonSchema, getPersonController.handle);
  app.get('/all', getAllPersonsSchema, getAllPersonsController.handle);
  app.put('/:id', updatePersonSchema, updatePersonController.handle);
  app.patch(
    '/:id/avatar',
    updateAvatarPersonSchema,
    updatePersonAvatarController.handle
  );
  app.delete('/:id', deletePersonSchema, deletePersonController.handle);
}
