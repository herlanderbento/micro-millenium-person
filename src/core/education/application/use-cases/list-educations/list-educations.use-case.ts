import { PersonSearchParams } from '../../../../person/domain';
import {
  IUseCase,
  PaginationOutputDto,
  PaginationOutputMapper,
} from '../../../../shared/application';
import { EducationSearchResult, IEducationRepository } from '../../../domain';
import { EducationOutput, EducationOutputMapper } from '../common';
import { ListEducationsInput } from './list-educations.input';

export class ListEducationsUseCase
  implements IUseCase<ListEducationsInput, ListEducationsOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: ListEducationsInput): Promise<ListEducationsOutput> {
    const params = new PersonSearchParams(input);
    const searchResult = await this.educationRepository.search(params);

    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: EducationSearchResult): ListEducationsOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return EducationOutputMapper.toOutput(item);
    });
    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListEducationsOutput = PaginationOutputDto<EducationOutput>;
