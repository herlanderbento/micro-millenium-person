import { NotFoundError } from '../../../../../shared/domain';
import { Education } from '../../../../domain';
import { EducationInMemoryRepository } from '../../../../infra';
import { UpdateEducationUseCase } from '../update-education.use-case';

describe('UpdateEducationUseCase Unit Tests', () => {
  let repository: EducationInMemoryRepository;
  let useCase: UpdateEducationUseCase;

  beforeEach(() => {
    repository = new EducationInMemoryRepository();
    useCase = new UpdateEducationUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
        title: 'some education 2',
        educationType: 'some training type 2',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should update a education default values', async () => {
    const education = Education.create({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });
    repository.create(education);

    const output = await useCase.execute({
      id: education.id,
      title: 'some education 2',
      educationType: 'some training type 2',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });

    expect(output).toMatchObject({
      id: education.id,
      title: 'some education 2',
      educationType: 'some training type 2',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });
  });

  it('should update a education all values', async () => {
    const education = Education.create({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
      address: 'some address',
      isCurrent: false,
      isVerified: false,
    });
    repository.create(education);

    const output = await useCase.execute({
      id: education.id,
      title: 'IT - Information Tecnologic',
      educationType: 'some training type',
      institute: 'Lusiada',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
      address: 'some address',
      isCurrent: true,
      isVerified: true,
    });

    expect(output).toMatchObject({
      id: education.id,
      title: 'IT - Information Tecnologic',
      educationType: 'some training type',
      institute: 'Lusiada',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
      address: 'some address',
      isCurrent: true,
      isVerified: true,
    });
  });
});
