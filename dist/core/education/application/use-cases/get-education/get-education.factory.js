"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEducationUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const get_education_use_case_1 = require("./get-education.use-case");
class GetEducationUseCaseFactory {
    static create() {
        const repository = new infra_1.EducationPrismaRepository();
        return new get_education_use_case_1.GetEducationUseCase(repository);
    }
}
exports.GetEducationUseCaseFactory = GetEducationUseCaseFactory;
