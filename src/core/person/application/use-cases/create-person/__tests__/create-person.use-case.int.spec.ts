import { PrismaClient } from '@prisma/client';
import { PersonPrismaRepository } from '../../../../infra';
import { CreatePersonUseCase } from '../create-person.use-case';
import { setupPrismaTests } from '../../../../../shared/infra';

describe('CreatePersonUseCase Integration Tests', () => {
  const prismaService = new PrismaClient();
  let useCase: CreatePersonUseCase;
  let repository: PersonPrismaRepository;

  beforeEach(async () => {
    setupPrismaTests();
    repository = new PersonPrismaRepository();
    useCase = new CreatePersonUseCase(repository);
  });

  // afterEach(async () => {
  //   await prismaService.person.deleteMany();
  // });

  it('should create a person with default values', async () => {
    const spyCreate = jest.spyOn(repository, 'insert');
    const output = await useCase.execute({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    expect(spyCreate).toBeCalledTimes(1);
    expect(output).toStrictEqual({
      id: output.id,
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: null,
      isOpenToWork: true,
      isFreelancer: true,
      avatar: null,
      createdAt: output.createdAt,
      updatedAt: output.updatedAt,
    });
  });

  it('should create a person with all values', async () => {
    const spyCreate = jest.spyOn(repository, 'insert');
    const output = await useCase.execute({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
      isOpenToWork: false,
      isFreelancer: false,
    });
    expect(spyCreate).toBeCalledTimes(1);
    expect(output).toStrictEqual({
      id: output.id,
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
      isOpenToWork: false,
      isFreelancer: false,
      avatar: null,
      createdAt: output.createdAt,
      updatedAt: output.updatedAt,
    });
  });
});
