"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../../person/domain");
const infra_1 = require("../../../../../person/infra");
const in_memory_1 = require("../../../../infra/db/in-memory");
const create_education_use_case_1 = require("../create-education.use-case");
describe('CreateEducationUseCase Unit Tests', () => {
    let personRepository;
    let repository;
    let useCase;
    beforeEach(() => {
        personRepository = new infra_1.PersonInMemoryRepository();
        repository = new in_memory_1.EducationInMemoryRepository();
        useCase = new create_education_use_case_1.CreateEducationUseCase(repository, personRepository);
    });
    it('should create a education with default values', async () => {
        const spyCreate = jest.spyOn(repository, 'insert');
        let person = domain_1.Person.fake().aPerson().build();
        personRepository.insert(person);
        let output = await useCase.execute({
            personId: personRepository.items[0].id,
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            description: 'some description',
            isCurrent: false,
            isVerified: false,
            address: null,
        });
        expect(spyCreate).toBeCalledTimes(1);
        expect(output).toMatchObject({
            personId: personRepository.items[0].id,
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            description: 'some description',
        });
        expect(output.id).toBeDefined();
        expect(output.address).toBeNull();
        expect(output.isCurrent).toBeFalsy();
        expect(output.isVerified).toBeFalsy();
        expect(output.endDate).toBeNull();
        expect(output.createdAt).toBeInstanceOf(Date);
        expect(output.updatedAt).toBeInstanceOf(Date);
    });
    it('should create a education with all values', async () => {
        const spyCreate = jest.spyOn(repository, 'insert');
        let person = domain_1.Person.fake().aPerson().build();
        personRepository.insert(person);
        let output = await useCase.execute({
            personId: personRepository.items[0].id,
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            address: 'some address',
            isCurrent: true,
            isVerified: true,
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            endDate: new Date('2023-10-15T09:29:58.242Z'),
            description: 'some description',
        });
        expect(spyCreate).toBeCalledTimes(1);
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            personId: personRepository.items[0].id,
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            address: 'some address',
            isCurrent: true,
            isVerified: true,
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            endDate: new Date('2023-10-15T09:29:58.242Z'),
            description: 'some description',
            createdAt: repository.items[0].createdAt,
            updatedAt: repository.items[0].updatedAt,
        });
    });
});
