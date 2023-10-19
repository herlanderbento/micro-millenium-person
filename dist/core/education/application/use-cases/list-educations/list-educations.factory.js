"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEducationsUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const list_educations_use_case_1 = require("./list-educations.use-case");
class ListEducationsUseCaseFactory {
    static create() {
        const repository = new infra_1.EducationPrismaRepository();
        return new list_educations_use_case_1.ListEducationsUseCase(repository);
    }
}
exports.ListEducationsUseCaseFactory = ListEducationsUseCaseFactory;
