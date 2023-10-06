"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonsUseCase = void 0;
class GetAllPersonsUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute() {
        const entity = await this.personRepository.findAll();
        return entity;
    }
}
exports.GetAllPersonsUseCase = GetAllPersonsUseCase;
