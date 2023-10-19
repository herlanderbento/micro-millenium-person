"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEducationUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const update_education_use_case_1 = require("./update-education.use-case");
class UpdateEducationUseCaseFactory {
    static create() {
        const repository = new infra_1.EducationPrismaRepository();
        return new update_education_use_case_1.UpdateEducationUseCase(repository);
    }
}
exports.UpdateEducationUseCaseFactory = UpdateEducationUseCaseFactory;
