"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const get_all_persons_use_case_1 = require("../get-all-persons.use-case");
describe('GetAllPersons unit tests', () => {
    let repository;
    let useCase;
    beforeEach(() => {
        repository = new infra_1.PersonInMemoryRepository();
        useCase = new get_all_persons_use_case_1.GetAllPersonsUseCase(repository);
    });
    it('should return all persons', async () => {
        const items = [
            new domain_1.Person({
                userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb7d',
                gender: 'male',
                address: 'address',
                birthdate: new Date('2001-07-15T09:29:58.242Z'),
            }),
            new domain_1.Person({
                userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
                gender: 'male',
                address: 'address',
                birthdate: new Date('2001-07-15T09:29:58.242Z'),
            }),
            new domain_1.Person({
                userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb2d',
                gender: 'male',
                address: 'address',
                birthdate: new Date('2001-07-15T09:29:58.242Z'),
            }),
        ];
        repository.items = items;
        const output = await useCase.execute();
        expect(output).toHaveLength(3);
    });
});
