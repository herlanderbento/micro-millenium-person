import { EducationPrismaRepository } from '../education-prisma.repository';
import { setupPrismaTests } from '../../../../../shared/infra';
import {
  Education,
  EducationSearchParams,
  EducationSearchResult,
} from '../../../../domain';
import { PersonPrismaRepository } from '../../../../../person/infra';
import { Person } from '../../../../../person/domain';
import { Uuid } from '../../../../../shared/domain';
import { EducationPrismaMapper } from '../education-prisma.mapper';

describe('EducationPrismaRepository integration tests', () => {
  // const prismaClient = new PrismaClient();
  let personRepository: PersonPrismaRepository;
  let repository: EducationPrismaRepository;

  beforeEach(async () => {
    setupPrismaTests();
    personRepository = new PersonPrismaRepository();
    repository = new EducationPrismaRepository();
  });

  it('should create a new entity', async () => {
    const person = Person.fake().aPerson().build();
    await personRepository.insert(person);

    const education = Education.fake()
      .aEducation()
      .withPersonId(person.id)
      .build();
    await repository.insert(education);
    const entity = await repository.findById(education.id);
    expect(entity.toJSON()).toStrictEqual(education.toJSON());
  });

  it('should finds a entity by id', async () => {
    let entityFound = await repository.findById(new Uuid());
    expect(entityFound).toBeNull();

    const person = Person.fake().aPerson().build();
    await personRepository.insert(person);

    const entity = Education.fake()
      .aEducation()
      .withPersonId(person.id)
      .build();
    await repository.insert(entity);
    entityFound = await repository.findById(entity.entityId);
    expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());
  });

  it('should return all educations', async () => {
    const person = Person.fake().aPerson().build();
    await personRepository.insert(person);

    const entity = Education.fake()
      .aEducation()
      .withPersonId(person.id)
      .build();
    await repository.insert(entity);
    const entities = await repository.findAll();
    expect(entities).toHaveLength(entities.length);
  });

  it('should delete a entity', async () => {
    const person = Person.fake().aPerson().build();
    await personRepository.insert(person);

    const entity = Education.fake()
      .aEducation()
      .withPersonId(person.id)
      .build();
    await repository.insert(entity);

    await repository.delete(entity.entityId);
    await expect(repository.findById(entity.entityId)).resolves.toBeNull();
  });

  it('should update a entity', async () => {
    const person = Person.fake().aPerson().build();
    await personRepository.insert(person);

    const entity = Education.fake()
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
      const person = Person.fake().aPerson().build();
      await personRepository.insert(person);

      const createdAt = new Date();
      const educations = Education.fake()
        .theEducations(16)
        .withPersonId(person.id)
        .withTitle('Science')
        .withCreatedAt(createdAt)
        .build();
      await repository.bulkInsert(educations);
      const spyToEntity = jest.spyOn(EducationPrismaMapper, 'toEntity');

      const searchOutput = await repository.search(new EducationSearchParams());
      expect(searchOutput).toBeInstanceOf(EducationSearchResult);
      expect(spyToEntity).toHaveBeenCalledTimes(15);
      expect(searchOutput.toJSON()).toMatchObject({
        total: searchOutput.total,
        current_page: 1,
        last_page: searchOutput.last_page,
        per_page: 15,
      });
      searchOutput.items.forEach((item) => {
        expect(item).toBeInstanceOf(Education);
        expect(item.entityId).toBeDefined();
      });
      const items = searchOutput.items.map((item) => item.toJSON());
      expect(items).toMatchObject(
        new Array(15).fill({
          title: 'Science',
          createdAt: createdAt,
        })
      );
    });

    it('should order by createdAt DESC when search params are null', async () => {
      const createdAt = new Date();
      const person = Person.fake().aPerson().build();
      await personRepository.insert(person);
      const educations = Education.fake()
        .theEducations(16)
        .withPersonId(person.id)
        .withTitle((index) => `Science ${index}`)
        .withCreatedAt((index) => new Date(createdAt.getTime() + index))
        .build();
      const searchOutput = await repository.search(new EducationSearchParams());
      const items = searchOutput.items;
      [...items].reverse().forEach((item, index) => {
        expect(`Science ${index + 1}`).toBe(`${educations[index + 1].title}`);
      });
    });

    it('should apply paginate and filter', async () => {
      const person = Person.fake().aPerson().build();
      await personRepository.insert(person);

      const educations = [
        Education.fake()
          .aEducation()
          .withPersonId(person.id)
          .withTitle('test')
          .withCreatedAt(new Date(new Date().getTime() + 5000))
          .build(),
        Education.fake()
          .aEducation()
          .withPersonId(person.id)
          .withTitle('a')
          .withCreatedAt(new Date(new Date().getTime() + 4000))
          .build(),
        Education.fake()
          .aEducation()
          .withPersonId(person.id)
          .withTitle('TEST')
          .withCreatedAt(new Date(new Date().getTime() + 3000))
          .build(),
        Education.fake()
          .aEducation()
          .withPersonId(person.id)
          .withTitle('TeSt')
          .withCreatedAt(new Date(new Date().getTime() + 1000))
          .build(),
      ];

      await repository.bulkInsert(educations);

      let searchOutput = await repository.search(
        new EducationSearchParams({
          page: 1,
          per_page: 2,
          filter: 'TEST',
        })
      );
      // expect(searchOutput.toJSON(true)).toMatchObject(
      //   new EducationSearchResult({
      //     items: [educations[0], educations[2]],
      //     total: searchOutput.total,
      //     current_page: 1,
      //     per_page: 2,
      //   }).toJSON(true)
      // );

      // searchOutput = await repository.search(
      //   new EducationSearchParams({
      //     page: 2,
      //     per_page: 2,
      //     filter: 'TEST',
      //   })
      // );
      // expect(searchOutput.toJSON(true)).toMatchObject(
      //   new EducationSearchResult({
      //     items: [educations[3]],
      //     total: 3,
      //     current_page: 2,
      //     per_page: 2,
      //   }).toJSON(true)
      // );
    });
  });
});
