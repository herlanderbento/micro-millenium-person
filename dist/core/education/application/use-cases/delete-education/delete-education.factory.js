"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEducationUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const delete_education_use_case_1 = require("./delete-education.use-case");
class DeleteEducationUseCaseFactory {
    static create() {
        const repository = new infra_1.EducationPrismaRepository();
        return new delete_education_use_case_1.DeleteEducationUseCase(repository);
    }
}
exports.DeleteEducationUseCaseFactory = DeleteEducationUseCaseFactory;
