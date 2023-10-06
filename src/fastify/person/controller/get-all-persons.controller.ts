import { FastifyRequest, FastifyReply } from 'fastify';
import { GetAllPersonsUseCaseFactory } from '../../../core/person/application';

export class GetAllPersonsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const GetAllPersonUseCase = GetAllPersonsUseCaseFactory.create();

    const output = await GetAllPersonUseCase.execute();

    return reply.status(200).send(output);
  }
}
