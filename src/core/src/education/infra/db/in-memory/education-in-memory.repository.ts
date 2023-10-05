import { Education, EducationId } from '../../../domain';
import {
  InMemorySearchableRepository,
  SortDirection,
} from '../../../../@seedwork/domain';
import { IEducationRepository } from '../../../domain/repository';

export class EducationInMemoryRepository
  extends InMemorySearchableRepository<Education, EducationId>
  implements IEducationRepository
{
  protected async applyFilter(
    items: Education[],
    filter: string
  ): Promise<Education[]> {
    if (!filter) {
      return items;
    }
  }

  protected async applySort(
    items: Education[],
    sort: string | null,
    sort_dir: SortDirection | null
  ): Promise<Education[]> {
    return !sort
      ? super.applySort(items, 'createdAt', 'desc')
      : super.applySort(items, sort, sort_dir);
  }
}
