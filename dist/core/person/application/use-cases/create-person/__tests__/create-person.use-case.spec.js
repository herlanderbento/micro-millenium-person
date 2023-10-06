"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infra_1 = require("../../../../infra");
const create_person_use_case_1 = require("../create-person.use-case");
describe('CreatePersonUseCase Unit Tests', () => {
    let repository;
    let useCase;
    beforeEach(() => {
        repository = new infra_1.PersonInMemoryRepository();
        useCase = new create_person_use_case_1.CreatePersonUseCase(repository);
    });
    it('should create a Person', async () => {
        const spyCreate = jest.spyOn(repository, 'create');
        let output = await useCase.execute({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        });
        expect(spyCreate).toBeCalledTimes(1);
        expect(output).toMatchObject({
            id: repository.items[0].id,
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: null,
            shareableSection: null,
            isOpenToWork: true,
            isFreelancer: true,
            avatar: null,
            createdAt: repository.items[0].createdAt,
            updatedAt: repository.items[0].updatedAt,
        });
    });
});
