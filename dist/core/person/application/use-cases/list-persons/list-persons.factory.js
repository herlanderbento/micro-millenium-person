"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonsUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const list_persons_use_case_1 = require("./list-persons.use-case");
class ListPersonsUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new list_persons_use_case_1.ListPersonsUseCase(personRepository);
    }
}
exports.ListPersonsUseCaseFactory = ListPersonsUseCaseFactory;
