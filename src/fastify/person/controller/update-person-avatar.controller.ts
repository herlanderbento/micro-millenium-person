import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdatePersonAvatarUseCaseFactory } from '../../../core/person/application';
import {
  personIdSchemaValidation,
  updatePersonAvatarBodySchemaValidation,
} from '../validation';

export class UpdatePersonAvatarController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = personIdSchemaValidation.parse(request.params);
    const { avatar } = updatePersonAvatarBodySchemaValidation.parse(
      request.body
    );

    const updatePersonAvatar = UpdatePersonAvatarUseCaseFactory.create();

    const output = await updatePersonAvatar.execute({ id, avatar });

    return reply.status(201).send(output);
  }
}
