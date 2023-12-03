import { NotFoundError } from '../../../../../shared/domain';
import { Education } from '../../../../domain';
import { EducationInMemoryRepository } from '../../../../infra';
import { DeleteEducationUseCase } from '../delete-education.use-case';

describe('DeleteEducationUseCase Unit Tests', () => {
  let repository: EducationInMemoryRepository;
  let useCase: DeleteEducationUseCase;

  beforeEach(() => {
    repository = new EducationInMemoryRepository();
    useCase = new DeleteEducationUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should delete a education', async () => {
    const education = Education.create({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });

    repository.insert(education);

    await useCase.execute({
      id: education.id,
    });
    expect(repository.items).toHaveLength(0);
  });
});
