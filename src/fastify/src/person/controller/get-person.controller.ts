import { FastifyRequest, FastifyReply } from "fastify";
import { makeGetPersonUseCase } from "../../../../@core/src/person/application";
import { personIdSchemaValidation } from "../validation";

export class GetPersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = personIdSchemaValidation.parse(request.params);

    const getPersonUseCase = makeGetPersonUseCase();

    const output = await getPersonUseCase.execute({ id });

    return reply.status(201).send(output);
  }
}
