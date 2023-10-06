"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonAvatarController = void 0;
const application_1 = require("../../../core/person/application");
const validation_1 = require("../validation");
class UpdatePersonAvatarController {
    async handle(request, reply) {
        const { id } = validation_1.personIdSchemaValidation.parse(request.params);
        const { avatar } = validation_1.updatePersonAvatarBodySchemaValidation.parse(request.body);
        const updatePersonAvatar = application_1.UpdatePersonAvatarUseCaseFactory.create();
        const output = await updatePersonAvatar.execute({ id, avatar });
        return reply.status(201).send(output);
    }
}
exports.UpdatePersonAvatarController = UpdatePersonAvatarController;
