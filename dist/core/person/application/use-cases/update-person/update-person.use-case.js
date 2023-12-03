"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonUseCase = void 0;
const common_1 = require("../common");
class UpdatePersonUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const entity = await this.personRepository.findById(input.id, true);
        entity.update(input);
        await this.personRepository.update(entity);
        return common_1.PersonOutputMapper.toOutput(entity);
    }
}
exports.UpdatePersonUseCase = UpdatePersonUseCase;
