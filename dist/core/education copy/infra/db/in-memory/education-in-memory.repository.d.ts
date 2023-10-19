import { Education, EducationId } from '../../../domain';
import { InMemorySearchableRepository, SortDirection } from '../../../../shared/domain';
import { IEducationRepository } from '../../../domain/repository';
export declare class EducationInMemoryRepository extends InMemorySearchableRepository<Education, EducationId> implements IEducationRepository {
    sortableFields: string[];
    protected applyFilter(items: Education[], filter: string): Promise<Education[]>;
    protected applySort(items: Education[], sort: string | null, sort_dir: SortDirection | null): Promise<Education[]>;
}
