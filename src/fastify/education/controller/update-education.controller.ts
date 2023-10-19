import { FastifyReply, FastifyRequest } from 'fastify';
import {
  UpdateEducationInput,
  UpdateEducationUseCaseFactory,
} from '../../../core/education/application';

export class UpdateEducationController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as UpdateEducationInput;
    const {
      title,
      educationType,
      institute,
      address,
      startDate,
      endDate,
      description,
      isCurrent,
      isVerified,
    } = request.body as UpdateEducationInput;

    const updateEducationUseCase = UpdateEducationUseCaseFactory.create();

    const output = await updateEducationUseCase.execute({
      id,
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

    return reply.status(200).send(output);
  }
}
