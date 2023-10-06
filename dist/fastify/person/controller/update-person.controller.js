"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonController = void 0;
const application_1 = require("../../../core/person/application");
const validation_1 = require("../validation");
class UpdatePersonController {
    async handle(request, reply) {
        const { id } = validation_1.personIdSchemaValidation.parse(request.params);
        const { gender, address, birthdate, biography, shareableSection } = validation_1.updatePersonBodySchemaValidation.parse(request.body);
        const getPersonUseCase = application_1.UpdatePersonUseCaseFactory.create();
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
exports.UpdatePersonController = UpdatePersonController;
