"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEducationsController = void 0;
const application_1 = require("../../../core/education/application");
class ListEducationsController {
    async handle(request, reply) {
        const listEducationsUseCase = application_1.ListEducationsUseCaseFactory.create();
        const output = await listEducationsUseCase.execute(request.query);
        return reply.status(200).send(output);
    }
}
exports.ListEducationsController = ListEducationsController;
