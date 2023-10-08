import { PersonPrismaRepository } from './../person-prisma.repository';
import { setupPrismaTests } from '../../../../../shared/infra';
import {
  Person,
  PersonId,
  PersonSearchParams,
  PersonSearchResult,
} from '../../../../domain';
import { NotFoundError } from '../../../../../shared/domain';
import { PersonPrismaMapper } from './../person-prisma.mapper';

describe('PersonPrismaRepository', () => {
  let repository: PersonPrismaRepository;

  beforeEach(async () => {
    setupPrismaTests();
    repository = new PersonPrismaRepository();
  });

  it('should create a new entity', async () => {
    const person = Person.fake().aPerson().build();
    await repository.create(person);
    const entity = await repository.findById(person.id);
    expect(entity.toJSON()).toStrictEqual(person.toJSON());
  });

  it('should throws error when entity is not found', async () => {
    await expect(repository.findById('fake id')).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID fake id`)
    );

    await expect(
      repository.findById(new PersonId('025a9698-d6a6-43fa-943f-3a2b21b6709a'))
    ).rejects.toThrow(
      new NotFoundError(
        'Entity Not Found using ID 025a9698-d6a6-43fa-943f-3a2b21b6709a'
      )
    );
  });

  it('should find a entity by id', async () => {
    const entity = Person.fake().aPerson().build();
    await repository.create(entity);
    let output = await repository.findById(entity.id);
    expect(entity.toJSON()).toStrictEqual(output.toJSON());
  });

  it('should return all persons', async () => {
    const entity = Person.fake().aPerson().build();
    await repository.create(entity);
    const entities = await repository.findAll();
    expect(entities).toHaveLength(entities.length);
  });

  it('should update a entity', async () => {
    const entity = Person.fake().aPerson().build();
    await repository.create(entity);

    const updateEntity = Person.fake()
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
    const entity = Person.fake().aPerson().build();
    await repository.create(entity);
    await repository.delete(entity.id);
    await expect(repository.findById(entity.id)).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID ${entity.id}`)
    );
  });

  describe('search method tests', () => {
    it('should only apply paginate when other params are null', async () => {
      const createdAt = new Date();
      const persons = Person.fake()
        .thePersons(16)
        .withCreatedAt(createdAt)
        .build();
      await repository.bulkCreate(persons);
      const spyToEntity = jest.spyOn(PersonPrismaMapper, 'toEntity');

      const searchOutput = await repository.search(new PersonSearchParams());
      expect(searchOutput).toBeInstanceOf(PersonSearchResult);
      expect(spyToEntity).toHaveBeenCalledTimes(15);
      expect(searchOutput.toJSON()).toMatchObject({
        total: searchOutput.total,
        current_page: 1,
        last_page: searchOutput.last_page,
        per_page: 15,
      });
      searchOutput.items.forEach((item) => {
        expect(item).toBeInstanceOf(Person);
        expect(item.entityId).toBeDefined();
      });
      const items = searchOutput.items.map((item) => item.toJSON());
      expect(items).toMatchObject(
        new Array(15).fill({
          createdAt: createdAt,
        })
      );
    });
  });
});
