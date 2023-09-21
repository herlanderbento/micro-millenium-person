import {
  IPersonRepository,
  PersonSearchParams,
  PersonSearchResult,
} from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { PersonOutputMapper, PersonProps } from "../dto";
import {
  PaginationOutputDto,
  PaginationOutputMapper,
  SearchInputDto,
} from "../../../@seedwork/application";

export class ListPersonUseCase
  implements DefaultUseCase<ListPersonInput, ListPersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: ListPersonInput): Promise<ListPersonOutput> {
    const params = new PersonSearchParams(input);
    const searchResult = await this.personRepository.search(params);

    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: PersonSearchResult): ListPersonOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return PersonOutputMapper.toOutput(item);
    });
    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListPersonInput = SearchInputDto;

export type ListPersonOutput = PaginationOutputDto<PersonProps>;
