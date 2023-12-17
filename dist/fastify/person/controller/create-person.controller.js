"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonController = void 0;
const validation_1 = require("../validation");
class CreatePersonController {
    createPersonUseCase;
    constructor(createPersonUseCase) {
        this.createPersonUseCase = createPersonUseCase;
    }
    async handle(request, reply) {
        const requestBody = validation_1.createPersonBodySchemaValidation.parse(request.body);
        const output = await this.createPersonUseCase.execute(requestBody);
        return reply.status(201).send(output);
    }
}
exports.CreatePersonController = CreatePersonController;
