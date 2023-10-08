import { Education, EducationSearchResult } from '../../../../domain';
import { EducationInMemoryRepository } from '../../../../infra';
import { EducationOutputMapper } from '../../common';
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

    const entity = Education.create({
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
    });

    output = useCase['toOutput'](result);
    expect(output).toStrictEqual({
      items: [entity].map(EducationOutputMapper.toOutput),
      total: 1,
      current_page: 1,
      per_page: 2,
      last_page: 1,
    });
  });

  it('should return output sorted by created_at when input param is empty', async () => {
    const items = [
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
        createdAt: new Date(new Date().getTime() + 100),
      }),
    ];
    repository.items = items;

    const output = await useCase.execute({});
    expect(output).toStrictEqual({
      items: [...items].reverse().map(EducationOutputMapper.toOutput),
      total: 2,
      current_page: 1,
      per_page: 15,
      last_page: 1,
    });
  });

  it('should return output using pagination, sort and filter', async () => {
    const items = [
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'a',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'AAA',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'AaA',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'b',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
      new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'c',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      }),
    ];
    repository.items = items;

    let output = await useCase.execute({
      page: 1,
      per_page: 2,
      sort: 'title',
      filter: 'a',
    });
    expect(output).toStrictEqual({
      items: [items[1], items[2]].map(EducationOutputMapper.toOutput),
      total: 3,
      current_page: 1,
      per_page: 2,
      last_page: 2,
    });

    output = await useCase.execute({
      page: 2,
      per_page: 2,
      sort: 'title',
      filter: 'a',
    });
    expect(output).toStrictEqual({
      items: [items[0]].map(EducationOutputMapper.toOutput),
      total: 3,
      current_page: 2,
      per_page: 2,
      last_page: 2,
    });

    output = await useCase.execute({
      page: 1,
      per_page: 2,
      sort: 'title',
      sort_dir: 'desc',
      filter: 'a',
    });
    expect(output).toStrictEqual({
      items: [items[0], items[2]].map(EducationOutputMapper.toOutput),
      total: 3,
      current_page: 1,
      per_page: 2,
      last_page: 2,
    });
  });
});
