import { FastifyReply, FastifyRequest } from 'fastify';
import {
  DeleteEducationInput,
  DeleteEducationUseCaseFactory,
} from '../../../core/education/application';

export class DeleteEducationController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as DeleteEducationInput;

    const deleteEducationUseCase = DeleteEducationUseCaseFactory.create();

    const output = await deleteEducationUseCase.execute({ id });

    return reply.status(200).send(output);
  }
}
