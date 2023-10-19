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
        const education = await this.educationRepository.findById(input.id);
        education.update(input);
        if (input.isVerified === true) {
            education.verified();
        }
        if (input.isVerified === false) {
            education.unverified();
        }
        await this.educationRepository.update(education);
        return education_output_1.EducationOutputMapper.toOutput(education);
    }
}
exports.UpdateEducationUseCase = UpdateEducationUseCase;
