import { NotFoundError } from '../../../../../shared/domain';
import { Education } from '../../../../domain';
import { EducationInMemoryRepository } from '../../../../infra';
import { GetEducationUseCase } from '../get-education.use-case';

describe('GetEducationUseCase Unit Tests', () => {
  let repository: EducationInMemoryRepository;
  let useCase: GetEducationUseCase;

  beforeEach(() => {
    repository = new EducationInMemoryRepository();
    useCase = new GetEducationUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should return a education', async () => {
    const education = Education.create({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });
    repository.create(education);

    await useCase.execute({
      id: education.id,
    });

    expect(education).toMatchObject({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });
    expect(education.id).toBeDefined();
    expect(education.address).toBeNull();
    expect(education.isCurrent).toBeFalsy();
    expect(education.isVerified).toBeFalsy();
    expect(education.endDate).toBeNull();
    expect(education.createdAt).toBeInstanceOf(Date);
    expect(education.updatedAt).toBeInstanceOf(Date);
  });
});
