import { FastifyRequest, FastifyReply } from 'fastify';
import { CreatePersonUseCase, CreatePersonUseCaseFactory } from '../../../core/person/application';
import { createPersonBodySchemaValidation } from '../validation';

export class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase){}
  
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const requestBody = createPersonBodySchemaValidation.parse(request.body);

    // const createPersonUseCase = CreatePersonUseCaseFactory.create();
    //@ts-ignore
    const output = await this.createPersonUseCase.execute(requestBody);

    return reply.status(201).send(output);
  }
}
