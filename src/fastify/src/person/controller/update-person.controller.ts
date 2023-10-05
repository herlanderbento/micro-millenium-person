import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdatePersonUseCaseFactory } from '../../../../core/src/person/application';
import {
  personIdSchemaValidation,
  updatePersonBodySchemaValidation,
} from '../validation';

export class UpdatePersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = personIdSchemaValidation.parse(request.params);

    const { gender, address, birthdate, biography, shareableSection } =
      updatePersonBodySchemaValidation.parse(request.body);

    const getPersonUseCase = UpdatePersonUseCaseFactory.create();

    const output = await getPersonUseCase.execute({
      id,
      gender,
      address,
      birthdate: new Date(birthdate),
      biography,
      shareableSection,
    });

    return reply.status(201).send(output);
  }
}
