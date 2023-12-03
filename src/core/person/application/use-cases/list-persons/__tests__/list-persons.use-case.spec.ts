import { Person, PersonSearchResult } from '../../../../domain';
import { PersonInMemoryRepository } from '../../../../infra';
import { ListPersonsUseCase } from '../list-persons.use-case';

describe('ListPersonsUseCase Unit Tests', () => {
  let repository: PersonInMemoryRepository;
  let useCase: ListPersonsUseCase;

  beforeEach(() => {
    repository = new PersonInMemoryRepository();
    useCase = new ListPersonsUseCase(repository);
  });

  test('toOutput method', () => {
    let result = new PersonSearchResult({
      items: [],
      total: 1,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null,
    });
    let output = useCase['toOutput'](result);
    expect(output).toStrictEqual({
      items: [],
      total: 1,
      current_page: 1,
      per_page: 2,
      last_page: 1,
    });

    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    result = new PersonSearchResult({
      items: [entity],
      total: 1,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null,
    });

    output = useCase['toOutput'](result);
    expect(output).toStrictEqual({
      items: [entity.toJSON()],
      total: 1,
      current_page: 1,
      per_page: 2,
      last_page: 1,
    });
  });

  it('should return output sorted by createdAt when input param is empty', async () => {
    const entity1 = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      createdAt: new Date(),
    });

    const entity2 = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      createdAt: new Date(new Date().getTime() + 100),
    });

    repository.insert(entity1);
    repository.insert(entity2);

    const output = await useCase.execute({});
    const expectedItems = [entity1, entity2].map((item) => item.toJSON());

    expect(output).toMatchObject({
      items: expectedItems,
      total: 2,
      current_page: 1,
      per_page: 15,
      last_page: 1,
    });
  });
});
