import { Person, PersonId, IPersonRepository } from '../../../domain';
import { InMemorySearchableRepository } from '../../../../shared/domain/repository/in-memory-repository';
import { SortDirection } from '../../../../shared/domain';

export class PersonInMemoryRepository
  extends InMemorySearchableRepository<Person, PersonId>
  implements IPersonRepository
{
  protected async applyFilter(
    items: Person[],
    filter: string
  ): Promise<Person[]> {
    if (!filter) {
      return items;
    }
  }

  protected async applySort(
    items: Person[],
    sort: string | null,
    sort_dir: SortDirection | null
  ): Promise<Person[]> {
    return !sort
      ? super.applySort(items, 'createdAt', 'desc')
      : super.applySort(items, sort, sort_dir);
  }
}
