import {
  IPersonRepository,
  PersonSearchParams,
  PersonSearchResult,
} from '../../../domain';
import { IUseCase } from '../../../../@seedwork/application/use-cases';
import {
  PaginationOutputDto,
  PaginationOutputMapper,
  SearchInputDto,
} from '../../../../@seedwork/application';
import { PersonOutput, PersonOutputMapper } from '../common';
import { ListPersonsInput } from './list-persons.input';

export class ListPersonsUseCase
  implements IUseCase<ListPersonsInput, ListPersonsOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: ListPersonsInput): Promise<ListPersonsOutput> {
    const params = new PersonSearchParams(input);
    const searchResult = await this.personRepository.search(params);

    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: PersonSearchResult): ListPersonsOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return PersonOutputMapper.toOutput(item);
    });
    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListPersonsOutput = PaginationOutputDto<PersonOutput>;
