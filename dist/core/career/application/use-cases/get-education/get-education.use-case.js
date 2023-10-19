"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEducationUseCase = void 0;
const domain_1 = require("../../../../shared/domain");
const common_1 = require("../common");
class GetEducationUseCase {
    educationRepository;
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async execute(input) {
        const education = await this.educationRepository.findById(input.id);
        if (!education) {
            throw new domain_1.NotFoundError(`education not found`);
        }
        return common_1.EducationOutputMapper.toOutput(education);
    }
}
exports.GetEducationUseCase = GetEducationUseCase;
