"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonUseCase = void 0;
const domain_1 = require("../../../domain");
const common_1 = require("../common");
class CreatePersonUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const entity = domain_1.Person.create(input);
        await this.personRepository.insert(entity);
        return common_1.PersonOutputMapper.toOutput(entity);
    }
}
exports.CreatePersonUseCase = CreatePersonUseCase;
