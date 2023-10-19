import { FastifyInstance } from 'fastify';
import {
  CreateEducationController,
  DeleteEducationController,
  GetEducationController,
  ListEducationsController,
  UpdateEducationController,
} from '../../education/controller';
import {
  createEducationSchema,
  deleteEducationSchema,
  getEducationSchema,
  listEducationsSchema,
  updateEducationSchema,
} from '../swagger';

const createEducationController = new CreateEducationController();
const listEducationsController = new ListEducationsController();
const getEducationController = new GetEducationController();
const deleteEducationController = new DeleteEducationController();
const updateEducationController = new UpdateEducationController();

export async function educationRoutes(app: FastifyInstance) {
  app.post('', createEducationSchema, createEducationController.handle);
  app.get('', listEducationsSchema, listEducationsController.handle);
  app.get('/:id', getEducationSchema, getEducationController.handle);
  app.put('/:id', updateEducationSchema, updateEducationController.handle);
  app.delete('/:id', deleteEducationSchema, deleteEducationController.handle);
}
