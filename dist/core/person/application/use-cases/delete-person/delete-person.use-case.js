"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePersonUseCase = void 0;
const domain_1 = require("../../../../shared/domain");
class DeletePersonUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const entity = await this.personRepository.findById(input.id);
        if (!entity) {
            throw new domain_1.NotFoundError('person not found');
        }
        await this.personRepository.delete(input.id);
    }
}
exports.DeletePersonUseCase = DeletePersonUseCase;
