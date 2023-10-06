"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const get_person_use_case_1 = require("./get-person.use-case");
class GetPersonUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new get_person_use_case_1.GetPersonUseCase(personRepository);
    }
}
exports.GetPersonUseCaseFactory = GetPersonUseCaseFactory;
