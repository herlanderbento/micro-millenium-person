import { Person } from '../../../../../person/domain';
import { PersonInMemoryRepository } from '../../../../../person/infra';
import { EducationInMemoryRepository } from '../../../../infra/db/in-memory';
import { CreateEducationUseCase } from '../create-education.use-case';

describe('CreateEducationUseCase Unit Tests', () => {
  let personRepository: PersonInMemoryRepository;
  let repository: EducationInMemoryRepository;
  let useCase: CreateEducationUseCase;

  beforeEach(() => {
    personRepository = new PersonInMemoryRepository();
    repository = new EducationInMemoryRepository();
    useCase = new CreateEducationUseCase(repository, personRepository);
  });

  it('should create a education with default values', async () => {
    const spyCreate = jest.spyOn(repository, 'create');
    let person = Person.fake().aPerson().build();
    personRepository.create(person);

    let output = await useCase.execute({
      personId: personRepository.items[0].id,
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
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
    const spyCreate = jest.spyOn(repository, 'create');
    let person = Person.fake().aPerson().build();
    personRepository.create(person);

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
