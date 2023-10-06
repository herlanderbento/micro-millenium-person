"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEducationUseCase = void 0;
const domain_1 = require("../../../domain");
const education_output_1 = require("../common/education-output");
class CreateEducationUseCase {
    educationRepository;
    personRepository;
    constructor(educationRepository, personRepository) {
        this.educationRepository = educationRepository;
        this.personRepository = personRepository;
    }
    async execute(input) {
        await this.personRepository.findById(input.personId);
        const education = domain_1.Education.create(input);
        await this.educationRepository.create(education);
        return education_output_1.EducationOutputMapper.toOutput(education);
    }
}
exports.CreateEducationUseCase = CreateEducationUseCase;
