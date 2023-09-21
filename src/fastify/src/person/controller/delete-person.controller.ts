import { FastifyRequest, FastifyReply } from "fastify";
import { makeDeletePersonUseCase } from "../../../../@core/src/person/application";
import { personIdSchemaValidation } from "../validation";

export class DeletePersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = personIdSchemaValidation.parse(request.params);

    const DeletePersonUseCase = makeDeletePersonUseCase();

    const output = await DeletePersonUseCase.execute({ id });

    return reply.status(201).send(output);
  }
}
