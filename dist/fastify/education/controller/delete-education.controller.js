"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEducationController = void 0;
const application_1 = require("../../../core/education/application");
class DeleteEducationController {
    async handle(request, reply) {
        const { id } = request.params;
        const deleteEducationUseCase = application_1.DeleteEducationUseCaseFactory.create();
        const output = await deleteEducationUseCase.execute({ id });
        return reply.status(200).send(output);
    }
}
exports.DeleteEducationController = DeleteEducationController;
