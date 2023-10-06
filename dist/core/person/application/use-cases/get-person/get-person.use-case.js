"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonUseCase = void 0;
const common_1 = require("../common");
class GetPersonUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const entity = await this.personRepository.findById(input.id);
        return common_1.PersonOutputMapper.toOutput(entity);
    }
}
exports.GetPersonUseCase = GetPersonUseCase;
