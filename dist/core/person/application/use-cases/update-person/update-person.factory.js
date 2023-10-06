"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const update_person_use_case_1 = require("./update-person.use-case");
class UpdatePersonUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new update_person_use_case_1.UpdatePersonUseCase(personRepository);
    }
}
exports.UpdatePersonUseCaseFactory = UpdatePersonUseCaseFactory;
