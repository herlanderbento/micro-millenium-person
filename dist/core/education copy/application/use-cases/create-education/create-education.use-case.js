"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEducationUseCase = void 0;
const domain_1 = require("../../../domain");
const common_1 = require("../common");
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
        return common_1.EducationOutputMapper.toOutput(education);
    }
}
exports.CreateEducationUseCase = CreateEducationUseCase;
