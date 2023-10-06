import { PersonInMemoryRepository } from '../../../../infra';
import { CreatePersonUseCase } from '../create-person.use-case';

describe('CreatePersonUseCase Unit Tests', () => {
  let repository: PersonInMemoryRepository;
  let useCase: CreatePersonUseCase;

  beforeEach(() => {
    repository = new PersonInMemoryRepository();
    useCase = new CreatePersonUseCase(repository);
  });

  it('should create a Person', async () => {
    const spyCreate = jest.spyOn(repository, 'create');
    let output = await useCase.execute({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    expect(spyCreate).toBeCalledTimes(1);
    expect(output).toMatchObject({
      id: repository.items[0].id,
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: null,
      shareableSection: null,
      isOpenToWork: true,
      isFreelancer: true,
      avatar: null,
      createdAt: repository.items[0].createdAt,
      updatedAt: repository.items[0].updatedAt,
    });
  });
});
