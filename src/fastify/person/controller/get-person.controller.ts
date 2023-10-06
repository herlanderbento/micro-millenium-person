import { FastifyRequest, FastifyReply } from 'fastify';
import { GetPersonUseCaseFactory } from '../../../core/person/application';
import { personIdSchemaValidation } from '../validation';

export class GetPersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = personIdSchemaValidation.parse(request.params);

    const getPersonUseCase = GetPersonUseCaseFactory.create();

    const output = await getPersonUseCase.execute({ id });

    return reply.status(201).send(output);
  }
}
