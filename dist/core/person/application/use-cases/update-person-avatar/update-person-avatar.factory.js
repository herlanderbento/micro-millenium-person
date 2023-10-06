"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonAvatarUseCaseFactory = void 0;
const infra_1 = require("../../../infra");
const update_person_avatar_use_case_1 = require("./update-person-avatar.use-case");
class UpdatePersonAvatarUseCaseFactory {
    static create() {
        const personRepository = new infra_1.PersonPrismaRepository();
        return new update_person_avatar_use_case_1.UpdatePersonAvatarUseCase(personRepository);
    }
}
exports.UpdatePersonAvatarUseCaseFactory = UpdatePersonAvatarUseCaseFactory;
