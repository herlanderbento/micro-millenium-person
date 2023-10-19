import { FastifyReply, FastifyRequest } from 'fastify';
import {
  GetEducationInput,
  GetEducationUseCaseFactory,
} from '../../../core/education/application';

export class GetEducationController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as GetEducationInput;

    const getEducationUseCase = GetEducationUseCaseFactory.create();

    const output = await getEducationUseCase.execute({ id });

    return reply.status(200).send(output);
  }
}
