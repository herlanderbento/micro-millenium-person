"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const infra_1 = require("../../../../infra");
const create_person_use_case_1 = require("../create-person.use-case");
const infra_2 = require("../../../../../shared/infra");
describe('CreatePersonUseCase Integration Tests', () => {
    const prismaService = new client_1.PrismaClient();
    let useCase;
    let repository;
    beforeEach(async () => {
        (0, infra_2.setupPrismaTests)();
        repository = new infra_1.PersonPrismaRepository();
        useCase = new create_person_use_case_1.CreatePersonUseCase(repository);
    });
    it('should create a person with default values', async () => {
        const spyCreate = jest.spyOn(repository, 'create');
        const output = await useCase.execute({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        });
        expect(spyCreate).toBeCalledTimes(1);
        expect(output).toStrictEqual({
            id: output.id,
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: null,
            shareableSection: null,
            isOpenToWork: true,
            isFreelancer: true,
            avatar: null,
            createdAt: output.createdAt,
            updatedAt: output.updatedAt,
        });
    });
    it('should create a person with all values', async () => {
        const spyCreate = jest.spyOn(repository, 'create');
        const output = await useCase.execute({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: 'some biography',
            shareableSection: 'some shareableSection',
            isOpenToWork: false,
            isFreelancer: false,
        });
        expect(spyCreate).toBeCalledTimes(1);
        expect(output).toStrictEqual({
            id: output.id,
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: 'some biography',
            shareableSection: 'some shareableSection',
            isOpenToWork: false,
            isFreelancer: false,
            avatar: null,
            createdAt: output.createdAt,
            updatedAt: output.updatedAt,
        });
    });
});
