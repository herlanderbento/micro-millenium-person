import { NotFoundError } from '../../../../../shared/domain';
import { Person } from '../../../../domain';
import { PersonPrismaRepository } from '../../../../infra';
import { UpdatePersonAvatarUseCase } from '../update-person-avatar.use-case';

describe('UpdatePersonAvatar Unit Tests', () => {
  let repository: PersonPrismaRepository;
  let useCase: UpdatePersonAvatarUseCase;

  beforeEach(() => {
    repository = new PersonPrismaRepository();
    useCase = new UpdatePersonAvatarUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
        avatar: 'some avatar',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should update a person avatar', async () => {
    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    await repository.create(entity);

    const output = await useCase.execute({
      id: entity.id,
      avatar: 'some avatar',
    });

    expect(output).toStrictEqual({
      id: entity.id,
      userId: entity.userId,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: entity.biography,
      shareableSection: entity.shareableSection,
      isOpenToWork: entity.isOpenToWork,
      isFreelancer: entity.isFreelancer,
      avatar: 'some avatar',
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  });
});