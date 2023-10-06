"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const delete_person_use_case_1 = require("../delete-person.use-case");
const domain_2 = require("../../../../../shared/domain");
describe('DeletePersonUseCase Unit Tests', () => {
    let repository;
    let useCase;
    beforeEach(() => {
        repository = new infra_1.PersonInMemoryRepository();
        useCase = new delete_person_use_case_1.DeletePersonUseCase(repository);
    });
    it('should throws error when entity not found', async () => {
        await expect(() => useCase.execute({
            id: 'fake id',
        })).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID fake id`));
    });
    it('should delete a Person', async () => {
        const entity = new domain_1.Person({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        });
        repository.create(entity);
        await useCase.execute({
            id: entity.id,
        });
        expect(repository.items).toHaveLength(0);
    });
});
