import Entity from "../entity/entity";
import { ValueObject } from "../value-objects";
import { RepositoryInterface, ISearchableRepository } from "./repository-interface";
import { SearchParams, SortDirection } from "./search-params";
import { SearchResult } from "./search-result";
export declare abstract class InMemoryRepository<E extends Entity, EntityId extends ValueObject> implements RepositoryInterface<E, EntityId> {
    items: E[];
    create(entity: E): Promise<void>;
    bulkCreate(entities: E[]): Promise<void>;
    findById(id: string | EntityId): Promise<E>;
    findAll(): Promise<E[]>;
    update(entity: E): Promise<E>;
    delete(id: string | EntityId): Promise<void>;
    protected _get(id: string): Promise<E>;
}
export declare abstract class InMemorySearchableRepository<E extends Entity, EntityId extends ValueObject, Filter = string> extends InMemoryRepository<E, EntityId> implements ISearchableRepository<E, EntityId, Filter> {
    sortableFields: string[];
    search(props: SearchParams<Filter>): Promise<SearchResult<E, Filter>>;
    protected abstract applyFilter(items: E[], filter: Filter | null): Promise<E[]>;
    protected applySort(items: E[], sort: string | null, sort_dir: SortDirection | null, custom_getter?: (sort: string, item: E) => any): Promise<E[]>;
    protected applyPaginate(items: E[], page: SearchParams["page"], per_page: SearchParams["per_page"]): Promise<E[]>;
}
