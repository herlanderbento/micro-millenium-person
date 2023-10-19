"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEducationUseCaseFactory = void 0;
const infra_1 = require("../../../../person/infra");
const infra_2 = require("../../../infra");
const create_education_use_case_1 = require("./create-education.use-case");
class CreateEducationUseCaseFactory {
    static create() {
        const educationrepository = new infra_2.EducationPrismaRepository();
        const personRepository = new infra_1.PersonPrismaRepository();
        return new create_education_use_case_1.CreateEducationUseCase(educationrepository, personRepository);
    }
}
exports.CreateEducationUseCaseFactory = CreateEducationUseCaseFactory;
