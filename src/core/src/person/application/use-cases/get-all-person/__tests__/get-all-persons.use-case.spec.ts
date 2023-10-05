import { Person } from '#person/domain';
import { PersonInMemoryRepository } from '#person/infra';
import { GetAllPersonsUseCase } from '../get-all-persons.use-case';

describe('GetAllPersons unit tests', () => {
  let repository: PersonInMemoryRepository;
  let useCase: GetAllPersonsUseCase;

  beforeEach(() => {
    repository = new PersonInMemoryRepository();
    useCase = new GetAllPersonsUseCase(repository);
  });

  it('should return all persons', async () => {
    const items = [
      new Person({
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb7d',
        gender: 'male',
        address: 'address',
        birthdate: new Date('2001-07-15T09:29:58.242Z'),
      }),
      new Person({
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        gender: 'male',
        address: 'address',
        birthdate: new Date('2001-07-15T09:29:58.242Z'),
      }),
      new Person({
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb2d',
        gender: 'male',
        address: 'address',
        birthdate: new Date('2001-07-15T09:29:58.242Z'),
      }),
    ];
    repository.items = items;

    const output = await useCase.execute();
    expect(output).toHaveLength(3);
  });
});
