import { Person, PersonId } from "../entities";
import {
  SearchParams,
  SearchResult,
  ISearchableRepository,
  IRedisRepository,
} from "../../../shared/domain/repository";

export type PersonFilter = string;

export class PersonSearchParams extends SearchParams<PersonFilter> {}
export class PersonSearchResult extends SearchResult<Person, PersonFilter> {}

export interface IPersonRepository
  extends Omit<
    ISearchableRepository<
      Person,
      PersonId,
      PersonFilter,
      PersonSearchParams,
      PersonSearchResult
    >,
    "bulkCreate"
  > {}

export interface IPersonRedisRepository extends IRedisRepository{}

export default IPersonRepository;
