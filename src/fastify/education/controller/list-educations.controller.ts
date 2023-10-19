import { FastifyReply, FastifyRequest } from 'fastify';
import { ListEducationsUseCaseFactory } from '../../../core/education/application';

export class ListEducationsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listEducationsUseCase = ListEducationsUseCaseFactory.create();

    const output = await listEducationsUseCase.execute(request.query);

    return reply.status(200).send(output);
  }
}
