import AggregateRoot from "../entity/aggregate-root";
import Entity from "../entity/entity";
import { ValueObject } from "../value-objects";
import { SearchParams } from "./search-params";
import { SearchResult } from "./search-result";
export interface RepositoryInterface<E extends AggregateRoot, EntityId extends ValueObject> {
    insert(entity: E): Promise<void>;
    bulkInsert(entities: E[]): Promise<void>;
    findById(id: string | EntityId): Promise<E>;
    findAll(): Promise<E[]>;
    update(entity: E): Promise<E>;
    delete(id: string | EntityId): Promise<void>;
}
export interface ISearchableRepository<E extends Entity, EntityId extends ValueObject, Filter = string, SearchInput = SearchParams<Filter>, SearchOutput = SearchResult<E, Filter>> extends RepositoryInterface<E, EntityId> {
    sortableFields: string[];
    search(props: SearchInput): Promise<SearchOutput>;
}
export interface IRedisRepository {
    get(key: string): Promise<string | null>;
    set(key: string, value: any, exp?: number): Promise<void>;
}
