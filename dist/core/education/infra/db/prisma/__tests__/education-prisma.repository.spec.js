"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const education_prisma_repository_1 = require("../education-prisma.repository");
const infra_1 = require("../../../../../shared/infra");
const domain_1 = require("../../../../domain");
const infra_2 = require("../../../../../person/infra");
const domain_2 = require("../../../../../person/domain");
const domain_3 = require("../../../../../shared/domain");
const education_prisma_mapper_1 = require("../education-prisma.mapper");
describe('EducationPrismaRepository integration tests', () => {
    let personRepository;
    let repository;
    beforeEach(async () => {
        (0, infra_1.setupPrismaTests)();
        personRepository = new infra_2.PersonPrismaRepository();
        repository = new education_prisma_repository_1.EducationPrismaRepository();
    });
    it('should create a new entity', async () => {
        const person = domain_2.Person.fake().aPerson().build();
        await personRepository.insert(person);
        const education = domain_1.Education.fake()
            .aEducation()
            .withPersonId(person.id)
            .build();
        await repository.insert(education);
        const entity = await repository.findById(education.id);
        expect(entity.toJSON()).toStrictEqual(education.toJSON());
    });
    it('should finds a entity by id', async () => {
        let entityFound = await repository.findById(new domain_3.Uuid());
        expect(entityFound).toBeNull();
        const person = domain_2.Person.fake().aPerson().build();
        await personRepository.insert(person);
        const entity = domain_1.Education.fake()
            .aEducation()
            .withPersonId(person.id)
            .build();
        await repository.insert(entity);
        entityFound = await repository.findById(entity.entityId);
        expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());
    });
    it('should return all educations', async () => {
        const person = domain_2.Person.fake().aPerson().build();
        await personRepository.insert(person);
        const entity = domain_1.Education.fake()
            .aEducation()
            .withPersonId(person.id)
            .build();
        await repository.insert(entity);
        const entities = await repository.findAll();
        expect(entities).toHaveLength(entities.length);
    });
    it('should delete a entity', async () => {
        const person = domain_2.Person.fake().aPerson().build();
        await personRepository.insert(person);
        const entity = domain_1.Education.fake()
            .aEducation()
            .withPersonId(person.id)
            .build();
        await repository.insert(entity);
        await repository.delete(entity.entityId);
        await expect(repository.findById(entity.entityId)).resolves.toBeNull();
    });
    it('should update a entity', async () => {
        const person = domain_2.Person.fake().aPerson().build();
        await personRepository.insert(person);
        const entity = domain_1.Education.fake()
            .aEducation()
            .withPersonId(person.id)
            .withTitle('Bachelor of Science')
            .build();
        await repository.insert(entity);
        const updateEntity = {
            title: 'Bachelor of Science Computer.',
            educationType: 'in person',
            institute: 'árvore da felicidade school',
            startDate: new Date('2018-02-15T09:29:58.242Z'),
            description: 'some description',
        };
        entity.update(updateEntity);
        await repository.update(entity);
        let entityFound = await repository.findById(entity.id);
        expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());
    });
    describe('search method tests', () => {
        it('should only apply paginate when other params are null', async () => {
            const person = domain_2.Person.fake().aPerson().build();
            await personRepository.insert(person);
            const createdAt = new Date();
            const educations = domain_1.Education.fake()
                .theEducations(16)
                .withPersonId(person.id)
                .withTitle('Science')
                .withCreatedAt(createdAt)
                .build();
            await repository.bulkInsert(educations);
            const spyToEntity = jest.spyOn(education_prisma_mapper_1.EducationPrismaMapper, 'toEntity');
            const searchOutput = await repository.search(new domain_1.EducationSearchParams());
            expect(searchOutput).toBeInstanceOf(domain_1.EducationSearchResult);
            expect(spyToEntity).toHaveBeenCalledTimes(15);
            expect(searchOutput.toJSON()).toMatchObject({
                total: searchOutput.total,
                current_page: 1,
                last_page: searchOutput.last_page,
                per_page: 15,
            });
            searchOutput.items.forEach((item) => {
                expect(item).toBeInstanceOf(domain_1.Education);
                expect(item.entityId).toBeDefined();
            });
            const items = searchOutput.items.map((item) => item.toJSON());
            expect(items).toMatchObject(new Array(15).fill({
                title: 'Science',
                createdAt: createdAt,
            }));
        });
        it('should order by createdAt DESC when search params are null', async () => {
            const createdAt = new Date();
            const person = domain_2.Person.fake().aPerson().build();
            await personRepository.insert(person);
            const educations = domain_1.Education.fake()
                .theEducations(16)
                .withPersonId(person.id)
                .withTitle((index) => `Science ${index}`)
                .withCreatedAt((index) => new Date(createdAt.getTime() + index))
                .build();
            const searchOutput = await repository.search(new domain_1.EducationSearchParams());
            const items = searchOutput.items;
            [...items].reverse().forEach((item, index) => {
                expect(`Science ${index + 1}`).toBe(`${educations[index + 1].title}`);
            });
        });
        it('should apply paginate and filter', async () => {
            const person = domain_2.Person.fake().aPerson().build();
            await personRepository.insert(person);
            const educations = [
                domain_1.Education.fake()
                    .aEducation()
                    .withPersonId(person.id)
                    .withTitle('test')
                    .withCreatedAt(new Date(new Date().getTime() + 5000))
                    .build(),
                domain_1.Education.fake()
                    .aEducation()
                    .withPersonId(person.id)
                    .withTitle('a')
                    .withCreatedAt(new Date(new Date().getTime() + 4000))
                    .build(),
                domain_1.Education.fake()
                    .aEducation()
                    .withPersonId(person.id)
                    .withTitle('TEST')
                    .withCreatedAt(new Date(new Date().getTime() + 3000))
                    .build(),
                domain_1.Education.fake()
                    .aEducation()
                    .withPersonId(person.id)
                    .withTitle('TeSt')
                    .withCreatedAt(new Date(new Date().getTime() + 1000))
                    .build(),
            ];
            await repository.bulkInsert(educations);
            let searchOutput = await repository.search(new domain_1.EducationSearchParams({
                page: 1,
                per_page: 2,
                filter: 'TEST',
            }));
        });
    });
});
