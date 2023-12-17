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
    it('should throw error when entity not found', async () => {
        const input = {
            id: 'fake id',
            gender: String('male'),
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
        };
        await expect(() => useCase.execute(input)).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID fake id`));
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
        expect(output).toMatchObject({
            id: entity.id,
            gender: 'male',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            biography: 'some biography',
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
        const arrange = [
            {
                input: {
                    id: entity.id,
                    gender: 'male',
                    address: 'address',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: 'some biography',
                },
                expected: {
                    id: entity.id,
                    userId: entity.userId,
                    gender: 'male',
                    address: 'address',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: 'some biography',
                    isOpenToWork: entity.isOpenToWork,
                    isFreelancer: entity.isFreelancer,
                    createdAt: entity.createdAt,
                    updatedAt: entity.updatedAt,
                },
            },
            {
                input: {
                    id: entity.id,
                    gender: 'female',
                    address: 'lisboa, portugal',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: '',
                },
                expected: {
                    id: entity.id,
                    userId: entity.userId,
                    gender: 'female',
                    address: 'lisboa, portugal',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: '',
                    isOpenToWork: entity.isOpenToWork,
                    isFreelancer: entity.isFreelancer,
                    createdAt: entity.createdAt,
                    updatedAt: entity.updatedAt,
                },
            },
            {
                input: {
                    id: entity.id,
                    gender: 'female',
                    address: 'lisboa, portugal',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: null,
                },
                expected: {
                    id: entity.id,
                    userId: entity.userId,
                    gender: 'female',
                    address: 'lisboa, portugal',
                    birthdate: new Date('2001-07-15T09:29:58.242Z'),
                    biography: null,
                    isOpenToWork: entity.isOpenToWork,
                    isFreelancer: entity.isFreelancer,
                    createdAt: entity.createdAt,
                    updatedAt: entity.updatedAt,
                },
            },
        ];
        for (const item of arrange) {
            output = await useCase.execute({
                id: item.input.id,
                gender: item.input.gender,
                address: item.input.address,
                birthdate: item.input.birthdate,
                biography: item.input.biography,
            });
            expect(output).toStrictEqual({
                id: entity.id,
                userId: entity.userId,
                gender: item.expected.gender,
                address: item.expected.address,
                birthdate: item.expected.birthdate,
                biography: item.expected.biography,
                isOpenToWork: entity.isOpenToWork,
                isFreelancer: entity.isFreelancer,
                avatar: entity.avatar,
                createdAt: item.expected.createdAt,
                updatedAt: item.expected.updatedAt,
            });
        }
    });
});
