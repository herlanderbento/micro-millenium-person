"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const create_person_use_case_1 = require("./create-person.use-case");
class CreatePersonUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new create_person_use_case_1.CreatePersonUseCase(personRepository);
    }
}
exports.CreatePersonUseCaseFactory = CreatePersonUseCaseFactory;
