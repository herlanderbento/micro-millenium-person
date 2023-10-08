"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_prisma_repository_1 = require("./../person-prisma.repository");
const infra_1 = require("../../../../../shared/infra");
const domain_1 = require("../../../../domain");
const domain_2 = require("../../../../../shared/domain");
const person_prisma_mapper_1 = require("./../person-prisma.mapper");
describe('PersonPrismaRepository', () => {
    let repository;
    beforeEach(async () => {
        (0, infra_1.setupPrismaTests)();
        repository = new person_prisma_repository_1.PersonPrismaRepository();
    });
    it('should create a new entity', async () => {
        const person = domain_1.Person.fake().aPerson().build();
        await repository.create(person);
        const entity = await repository.findById(person.id);
        expect(entity.toJSON()).toStrictEqual(person.toJSON());
    });
    it('should throws error when entity is not found', async () => {
        await expect(repository.findById('fake id')).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID fake id`));
        await expect(repository.findById(new domain_1.PersonId('025a9698-d6a6-43fa-943f-3a2b21b6709a'))).rejects.toThrow(new domain_2.NotFoundError('Entity Not Found using ID 025a9698-d6a6-43fa-943f-3a2b21b6709a'));
    });
    it('should find a entity by id', async () => {
        const entity = domain_1.Person.fake().aPerson().build();
        await repository.create(entity);
        let output = await repository.findById(entity.id);
        expect(entity.toJSON()).toStrictEqual(output.toJSON());
    });
    it('should return all persons', async () => {
        const entity = domain_1.Person.fake().aPerson().build();
        await repository.create(entity);
        const entities = await repository.findAll();
        expect(entities).toHaveLength(entities.length);
    });
    it('should update a entity', async () => {
        const entity = domain_1.Person.fake().aPerson().build();
        await repository.create(entity);
        const updateEntity = domain_1.Person.fake()
            .aPerson()
            .withAddress('toronto')
            .withGender('male')
            .build();
        entity.update(updateEntity);
        await repository.update(entity);
        let entityFound = await repository.findById(entity.id);
        expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());
    });
    it('should delete a entity', async () => {
        const entity = domain_1.Person.fake().aPerson().build();
        await repository.create(entity);
        await repository.delete(entity.id);
        await expect(repository.findById(entity.id)).rejects.toThrow(new domain_2.NotFoundError(`Entity Not Found using ID ${entity.id}`));
    });
    describe('search method tests', () => {
        it('should only apply paginate when other params are null', async () => {
            const createdAt = new Date();
            const persons = domain_1.Person.fake()
                .thePersons(16)
                .withCreatedAt(createdAt)
                .build();
            await repository.bulkCreate(persons);
            const spyToEntity = jest.spyOn(person_prisma_mapper_1.PersonPrismaMapper, 'toEntity');
            const searchOutput = await repository.search(new domain_1.PersonSearchParams());
            expect(searchOutput).toBeInstanceOf(domain_1.PersonSearchResult);
            expect(spyToEntity).toHaveBeenCalledTimes(15);
            expect(searchOutput.toJSON()).toMatchObject({
                total: searchOutput.total,
                current_page: 1,
                last_page: searchOutput.last_page,
                per_page: 15,
            });
            searchOutput.items.forEach((item) => {
                expect(item).toBeInstanceOf(domain_1.Person);
                expect(item.entityId).toBeDefined();
            });
            const items = searchOutput.items.map((item) => item.toJSON());
            expect(items).toMatchObject(new Array(15).fill({
                createdAt: createdAt,
            }));
        });
    });
});
