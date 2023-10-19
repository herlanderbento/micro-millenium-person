"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEducationController = void 0;
const application_1 = require("../../../core/education/application");
class GetEducationController {
    async handle(request, reply) {
        const { id } = request.params;
        const getEducationUseCase = application_1.GetEducationUseCaseFactory.create();
        const output = await getEducationUseCase.execute({ id });
        return reply.status(200).send(output);
    }
}
exports.GetEducationController = GetEducationController;
