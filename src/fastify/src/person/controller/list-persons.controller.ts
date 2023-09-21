import { FastifyRequest, FastifyReply } from "fastify";
import { makeListPersonUseCase } from "../../../../@core/src/person/application";

export class ListPersonsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPersonUseCase = makeListPersonUseCase();

    const output = await listPersonUseCase.execute(request.query);

    return reply.status(200).send(output);
  }
}
