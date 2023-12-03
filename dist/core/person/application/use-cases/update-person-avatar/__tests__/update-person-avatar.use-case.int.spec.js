"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../../shared/domain");
const domain_2 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const update_person_avatar_use_case_1 = require("../update-person-avatar.use-case");
describe('UpdatePersonAvatar Unit Tests', () => {
    let repository;
    let useCase;
    beforeEach(() => {
        repository = new infra_1.PersonPrismaRepository();
        useCase = new update_person_avatar_use_case_1.UpdatePersonAvatarUseCase(repository);
    });
    it('should throws error when entity not found', async () => {
        await expect(() => useCase.execute({
            id: 'fake id',
            avatar: 'some avatar',
        })).rejects.toThrow(new domain_1.NotFoundError(`Entity Not Found using ID fake id`));
    });
    it('should update a person avatar', async () => {
        const entity = new domain_2.Person({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        });
        await repository.insert(entity);
        const input = {
            id: entity.id,
            avatar: 'some avatar',
        };
        const output = await useCase.execute(input);
        expect(output).toStrictEqual({
            id: entity.id,
            userId: entity.userId,
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: entity.biography,
            isOpenToWork: entity.isOpenToWork,
            isFreelancer: entity.isFreelancer,
            avatar: 'some avatar',
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    });
});
