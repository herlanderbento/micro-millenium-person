"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonController = void 0;
const application_1 = require("../../../core/person/application");
const validation_1 = require("../validation");
class CreatePersonController {
    async handle(request, reply) {
        const requestBody = validation_1.createPersonBodySchemaValidation.parse(request.body);
        const CreatePersonUseCase = application_1.CreatePersonUseCaseFactory.create();
        const output = await CreatePersonUseCase.execute(requestBody);
        return reply.status(201).send(output);
    }
}
exports.CreatePersonController = CreatePersonController;
