import { FastifyRequest, FastifyReply } from "fastify";
import { makeGetAllPersonUseCase } from "../../../../@core/src/person/application";

export class GetAllPersonsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const GetAllPersonUseCase = makeGetAllPersonUseCase();

    const output = await GetAllPersonUseCase.execute();

    return reply.status(200).send(output);
  }
}
