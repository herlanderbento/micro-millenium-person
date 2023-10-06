import { FastifyRequest, FastifyReply } from 'fastify';
import { CreatePersonUseCaseFactory } from '../../../core/person/application';
import { createPersonBodySchemaValidation } from '../validation';

export class CreatePersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const requestBody = createPersonBodySchemaValidation.parse(request.body);

    const CreatePersonUseCase = CreatePersonUseCaseFactory.create();
    //@ts-ignore
    const output = await CreatePersonUseCase.execute(requestBody);

    return reply.status(201).send(output);
  }
}
