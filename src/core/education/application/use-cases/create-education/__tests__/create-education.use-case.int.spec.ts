import { Person } from '../../../../../person/domain';
import { PersonPrismaRepository } from '../../../../../person/infra';
import { setupPrismaTests } from '../../../../../shared/infra';
import { EducationPrismaRepository } from '../../../../infra';
import { CreateEducationUseCase } from '../create-education.use-case';

describe('CreateEducationUseCase Integration Tests', () => {
  let personRepository: PersonPrismaRepository;
  let repository: EducationPrismaRepository;
  let useCase: CreateEducationUseCase;

  beforeEach(() => {
    // setupPrismaTests()

    personRepository = new PersonPrismaRepository();
    repository = new EducationPrismaRepository();
    useCase = new CreateEducationUseCase(repository, personRepository);
  });

  it('should create a education with default values', async () => {
    // const spyCreate = jest.spyOn(repository, 'create');
    let person = Person.fake().aPerson().build();
    await personRepository.create(person);

    let output = await useCase.execute({
      personId: person.id,
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });
    // expect(spyCreate).toBeCalledTimes(1);
    expect(output).toMatchObject({
      personId: person.id,
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
      personId: person.id,
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
      id: output.id,
      personId: person.id,
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      address: 'some address',
      isCurrent: true,
      isVerified: true,
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      endDate: new Date('2023-10-15T09:29:58.242Z'),
      description: 'some description',
      createdAt: output.createdAt,
      updatedAt: output.updatedAt,
    });
  });
});
