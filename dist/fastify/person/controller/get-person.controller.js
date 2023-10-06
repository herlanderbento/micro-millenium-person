"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonController = void 0;
const application_1 = require("../../../core/person/application");
const validation_1 = require("../validation");
class GetPersonController {
    async handle(request, reply) {
        const { id } = validation_1.personIdSchemaValidation.parse(request.params);
        const getPersonUseCase = application_1.GetPersonUseCaseFactory.create();
        const output = await getPersonUseCase.execute({ id });
        return reply.status(201).send(output);
    }
}
exports.GetPersonController = GetPersonController;
