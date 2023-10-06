"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonsController = void 0;
const application_1 = require("../../../core/person/application");
class GetAllPersonsController {
    async handle(request, reply) {
        const GetAllPersonUseCase = application_1.GetAllPersonsUseCaseFactory.create();
        const output = await GetAllPersonUseCase.execute();
        return reply.status(200).send(output);
    }
}
exports.GetAllPersonsController = GetAllPersonsController;
