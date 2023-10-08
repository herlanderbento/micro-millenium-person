import { FastifyReply, FastifyRequest } from 'fastify';
import {
  CreateEducationInput,
  CreateEducationUseCaseFactory,
} from '../../../core/education/application';

export class CreateEducationController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      personId,
      title,
      educationType,
      institute,
      address,
      startDate,
      endDate,
      description,
      isCurrent,
      isVerified,
    } = request.body as CreateEducationInput;

    const createEducationUseCase = CreateEducationUseCaseFactory.create();

    const output = await createEducationUseCase.execute({
      personId,
      title,
      educationType,
      institute,
      address,
      startDate,
      endDate,
      description,
      isCurrent,
      isVerified,
    });

    return reply.status(201).send(output);
  }
}
