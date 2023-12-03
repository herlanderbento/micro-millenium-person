"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const domain_2 = require("../../../../../shared/domain");
const update_person_use_case_1 = require("../update-person.use-case");
const client_1 = require("@prisma/client");
describe('UpdatePersonUseCase Unit Tests', () => {
    let repository;
    let useCase;
    const prismaService = new client_1.PrismaClient();
    beforeEach(() => {
        repository = new infra_1.PersonPrismaRepository();
        useCase = new update_person_use_case_1.UpdatePersonUseCase(repository);
    });
    it('should throws error when entity not found', async () => {
        await expect(() => useCase.execute({
            id: 'fake id',
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        })).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID fake id`));
    });
    it('should Update a Person', async () => {
        const entity = domain_1.Person.fake().aPerson().build();
        await prismaService.person.create({ data: entity });
        let output = await useCase.execute({
            id: entity.id,
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: 'some biography',
        });
    });
});
