import { FastifyRequest, FastifyReply } from "fastify";
import { makeCreatePersonUseCase } from "../../../../@core/src/person/application";
import { createPersonBodySchemaValidation } from "../validation";

export class CreatePersonController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const requestBody = createPersonBodySchemaValidation.parse(request.body);

    const CreatePersonUseCase = makeCreatePersonUseCase();
    //@ts-ignore
    const output = await CreatePersonUseCase.execute(requestBody);

    return reply.status(201).send(output);
  }
}
