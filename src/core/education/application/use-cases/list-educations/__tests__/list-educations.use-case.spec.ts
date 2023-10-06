import { Education, EducationSearchResult } from '../../../../domain';
import { EducationInMemoryRepository } from '../../../../infra';
import { ListEducationsUseCase } from '../list-educations.use-case';

describe('ListPersonsUseCase Unit Tests', () => {
  let repository: EducationInMemoryRepository;
  let useCase: ListEducationsUseCase;

  beforeEach(() => {
    repository = new EducationInMemoryRepository();
    useCase = new ListEducationsUseCase(repository);
  });

  test('toOutput method', () => {
    let result = new EducationSearchResult({
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

    const entity = new Education({
      personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      title: 'some education',
      educationType: 'some training type',
      institute: 'some institute',
      startDate: new Date('2023-07-15T09:29:58.242Z'),
      description: 'some description',
    });

    result = new EducationSearchResult({
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
});
