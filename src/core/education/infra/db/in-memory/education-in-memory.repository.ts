import { Education, EducationId } from '../../../domain';
import {
  InMemorySearchableRepository,
  SortDirection,
} from '../../../../shared/domain';
import { IEducationRepository } from '../../../domain/repository';

export class EducationInMemoryRepository
  extends InMemorySearchableRepository<Education, EducationId>
  implements IEducationRepository
{
  sortableFields: string[] = ['title', 'createdAt'];

  protected async applyFilter(
    items: Education[],
    filter: string
  ): Promise<Education[]> {
    if (!filter) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
  }

  protected async applySort(
    items: Education[],
    sort: string | null,
    sort_dir: SortDirection | null
  ): Promise<Education[]> {
    return sort
      ? super.applySort(items, sort, sort_dir)
      : super.applySort(items, 'createdAt', 'desc');
  }
}
