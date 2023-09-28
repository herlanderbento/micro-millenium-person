import {
  ISearchableRepository,
  RepositoryInterface,
  SearchParams,
  SearchResult,
} from '../../../@seedwork/domain';
import { Education, EducationId } from '../entities/education.entity';

export type EducationFilter = string;

export class EducationSearchParams extends SearchParams<EducationFilter> {}
export class EducationSearchResult extends SearchResult<
  Education,
  EducationFilter
> {}

export interface IEducationRepository
  extends Omit<
    ISearchableRepository<
      Education,
      EducationId,
      EducationFilter,
      EducationSearchParams,
      EducationSearchResult
    >,
    'bulkCreate' | 'search'
  > {}
