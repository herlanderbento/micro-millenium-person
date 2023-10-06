import { Person, PersonId, IPersonRepository } from '../../../domain';
import { InMemorySearchableRepository } from '../../../../shared/domain/repository/in-memory-repository';
import { SortDirection } from '../../../../shared/domain';
export declare class PersonInMemoryRepository extends InMemorySearchableRepository<Person, PersonId> implements IPersonRepository {
    protected applyFilter(items: Person[], filter: string): Promise<Person[]>;
    protected applySort(items: Person[], sort: string | null, sort_dir: SortDirection | null): Promise<Person[]>;
}
