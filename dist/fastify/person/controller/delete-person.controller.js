"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePersonController = void 0;
const application_1 = require("../../../core/person/application");
const validation_1 = require("../validation");
class DeletePersonController {
    async handle(request, reply) {
        const { id } = validation_1.personIdSchemaValidation.parse(request.params);
        const DeletePersonUseCase = application_1.DeletePersonUseCaseFactory.create();
        const output = await DeletePersonUseCase.execute({ id });
        return reply.status(201).send(output);
    }
}
exports.DeletePersonController = DeletePersonController;
