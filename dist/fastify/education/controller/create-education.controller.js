"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEducationController = void 0;
const application_1 = require("../../../core/education/application");
class CreateEducationController {
    async handle(request, reply) {
        const { personId, title, educationType, institute, address, startDate, endDate, description, isCurrent, isVerified, } = request.body;
        const createEducationUseCase = application_1.CreateEducationUseCaseFactory.create();
        const output = await createEducationUseCase.execute({
            personId,
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
        return reply.status(201).send(output);
    }
}
exports.CreateEducationController = CreateEducationController;
