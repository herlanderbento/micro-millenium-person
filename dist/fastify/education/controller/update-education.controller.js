"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEducationController = void 0;
const application_1 = require("../../../core/education/application");
class UpdateEducationController {
    async handle(request, reply) {
        const { id } = request.params;
        const { title, educationType, institute, address, startDate, endDate, description, isCurrent, isVerified, } = request.body;
        const updateEducationUseCase = application_1.UpdateEducationUseCaseFactory.create();
        const output = await updateEducationUseCase.execute({
            id,
            title,
            educationType,
            institute,
            address,
            startDate,
            endDate,
            description,
            isCurrent,
            isVerified,
        });
        return reply.status(200).send(output);
    }
}
exports.UpdateEducationController = UpdateEducationController;
