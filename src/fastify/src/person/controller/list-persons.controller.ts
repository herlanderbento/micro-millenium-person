import { FastifyRequest, FastifyReply } from 'fastify';
import { ListPersonsUseCaseFactory } from '../../../../core/src/person/application';

export class ListPersonsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPersonUseCase = ListPersonsUseCaseFactory.create();

    const output = await listPersonUseCase.execute(request.query);

    return reply.status(200).send(output);
  }
}
