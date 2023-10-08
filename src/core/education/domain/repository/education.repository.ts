import {
  ISearchableRepository,
  SearchParams,
  SearchResult,
} from '../../../shared/domain';
import { Education, EducationId } from '../entities/education.entity';

export type EducationFilter = string;

export class EducationSearchParams extends SearchParams<EducationFilter> {}
export class EducationSearchResult extends SearchResult<
  Education,
  EducationFilter
> {}

export interface IEducationRepository
  extends ISearchableRepository<
    Education,
    EducationId,
    EducationFilter,
    EducationSearchParams,
    EducationSearchResult
  > {}
