"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEductionUseCase = void 0;
const domain_1 = require("../../../../shared/domain");
class DeleteEductionUseCase {
    educationRepository;
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async execute(input) {
        const education = await this.educationRepository.findById(input.id);
        if (!education) {
            throw new domain_1.NotFoundError(`${education.title} Not Found using ID ${input.id}`);
        }
        await this.educationRepository.delete(input.id);
    }
}
exports.DeleteEductionUseCase = DeleteEductionUseCase;
