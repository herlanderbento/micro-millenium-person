import { Person } from '../../../../domain';
import { PersonPrismaRepository } from '../../../../infra';
import { NotFoundError } from '../../../../../shared/domain';
import { GetPersonUseCase } from '../get-person.use-case';
import { setupPrismaTests } from '../../../../../shared/infra';

describe('GetPersonUseCase Integration Tests', () => {
  let repository: PersonPrismaRepository;
  let useCase: GetPersonUseCase;

  beforeEach(async () => {
    setupPrismaTests();

    repository = new PersonPrismaRepository();
    useCase = new GetPersonUseCase(repository);
  });

  // afterEach(async () => {
  //   await prismaService.person.deleteMany();
  // });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should returns a Person', async () => {
    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    repository.insert(entity);

    let output = await useCase.execute({
      id: entity.id,
    });
    expect(output).toMatchObject({
      id: entity.id,
      userId: entity.userId,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: entity.biography,
      isOpenToWork: entity.isOpenToWork,
      isFreelancer: entity.isFreelancer,
      avatar: entity.avatar,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  });
});
