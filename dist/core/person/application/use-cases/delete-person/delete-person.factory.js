"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePersonUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const delete_person_use_case_1 = require("./delete-person.use-case");
class DeletePersonUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new delete_person_use_case_1.DeletePersonUseCase(personRepository);
    }
}
exports.DeletePersonUseCaseFactory = DeletePersonUseCaseFactory;
