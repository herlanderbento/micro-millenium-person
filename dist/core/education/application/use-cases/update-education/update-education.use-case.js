"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEducationUseCase = void 0;
const education_output_1 = require("../common/education-output");
class UpdateEducationUseCase {
    educationRepository;
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async execute(input) {
        const entity = await this.educationRepository.findById(input.id);
        entity.update(input);
        if (input.isVerified === true) {
            entity.verified();
        }
        if (input.isVerified === false) {
            entity.unverified();
        }
        await this.educationRepository.update(entity);
        return education_output_1.EducationOutputMapper.toOutput(entity);
    }
}
exports.UpdateEducationUseCase = UpdateEducationUseCase;
