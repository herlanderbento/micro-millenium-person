import { Person, PersonId } from '../entities';
import { SearchParams, SearchResult, ISearchableRepository, IRedisRepository } from '../../../shared/domain/repository';
export type PersonFilter = string;
export declare class PersonSearchParams extends SearchParams<PersonFilter> {
}
export declare class PersonSearchResult extends SearchResult<Person, PersonFilter> {
}
export interface IPersonRepository extends Omit<ISearchableRepository<Person, PersonId, PersonFilter, PersonSearchParams, PersonSearchResult>, 'findById'> {
    findById(id: string | PersonId, related?: boolean): Promise<Person>;
}
export interface IPersonRedisRepository extends IRedisRepository {
}
export default IPersonRepository;
