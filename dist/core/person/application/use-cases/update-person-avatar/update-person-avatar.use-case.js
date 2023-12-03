"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonAvatarUseCase = void 0;
const common_1 = require("../common");
class UpdatePersonAvatarUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const entity = await this.personRepository.findById(input.id, true);
        entity.updateAvatar(input.avatar);
        await this.personRepository.update(entity);
        return common_1.PersonOutputMapper.toOutput(entity);
    }
}
exports.UpdatePersonAvatarUseCase = UpdatePersonAvatarUseCase;
