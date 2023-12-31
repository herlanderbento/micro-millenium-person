"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const domain_2 = require("../../../../../shared/domain");
const get_person_use_case_1 = require("../get-person.use-case");
const infra_2 = require("../../../../../shared/infra");
describe('GetPersonUseCase Integration Tests', () => {
    let repository;
    let useCase;
    beforeEach(async () => {
        (0, infra_2.setupPrismaTests)();
        repository = new infra_1.PersonPrismaRepository();
        useCase = new get_person_use_case_1.GetPersonUseCase(repository);
    });
    it('should throws error when entity not found', async () => {
        await expect(() => useCase.execute({
            id: 'fake id',
        })).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID fake id`));
    });
    it('should returns a Person', async () => {
        const entity = new domain_1.Person({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        });
        repository.insert(entity);
        let output = await useCase.execute({
            id: entity.id,
        });
        expect(output).toMatchObject({
            id: entity.id,
            userId: entity.userId,
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: entity.biography,
            isOpenToWork: entity.isOpenToWork,
            isFreelancer: entity.isFreelancer,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    });
});
