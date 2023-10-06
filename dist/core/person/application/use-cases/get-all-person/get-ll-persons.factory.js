"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonsUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const get_all_persons_use_case_1 = require("./get-all-persons.use-case");
class GetAllPersonsUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new get_all_persons_use_case_1.GetAllPersonsUseCase(personRepository);
    }
}
exports.GetAllPersonsUseCaseFactory = GetAllPersonsUseCaseFactory;
