"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonsController = void 0;
const application_1 = require("../../../core/person/application");
class ListPersonsController {
    async handle(request, reply) {
        const listPersonUseCase = application_1.ListPersonsUseCaseFactory.create();
        const output = await listPersonUseCase.execute(request.query);
        return reply.status(200).send(output);
    }
}
exports.ListPersonsController = ListPersonsController;
