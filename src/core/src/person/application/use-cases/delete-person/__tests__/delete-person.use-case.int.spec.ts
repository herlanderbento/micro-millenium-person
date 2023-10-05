import { Person } from '../../../../domain';
import { PersonPrismaRepository } from '../../../../infra';
import { NotFoundError } from '../../../../../shared/domain';
import { prismaClient, setupPrismaTests } from '#shared/infra';
import { PrismaClient } from '@prisma/client';
import { DeletePersonUseCase } from '../delete-person.use-case';

describe('DeletePersonUseCase Integration Tests', () => {
  const prismaService = new PrismaClient();
  let repository: PersonPrismaRepository;
  let useCase: DeletePersonUseCase;

  beforeEach(() => {
    setupPrismaTests();

    repository = new PersonPrismaRepository();
    useCase = new DeletePersonUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should delete a Person', async () => {
    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    const model = await prismaClient.person.create({ data: entity });
    await useCase.execute({
      id: entity.id,
    });

    const noHasModel = await prismaClient.person.findUnique({
      where: { id: model.id },
    });
    expect(noHasModel).toBeNull();
  });
});
