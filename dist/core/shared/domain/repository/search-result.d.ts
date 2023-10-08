import { Entity } from "../entity";
type SearchResultConstructorProps<E extends Entity, Filter> = {
    items: E[];
    total: number;
    current_page: number;
    per_page: number;
    sort?: string | null;
    sort_dir?: string | null;
    filter?: Filter | null;
};
export declare class SearchResult<E extends Entity = Entity, Filter = string> {
    readonly items: E[];
    readonly total: number;
    readonly current_page: number;
    readonly per_page: number;
    readonly last_page: number;
    readonly sort: string | null;
    readonly sort_dir: string | null;
    readonly filter: Filter;
    constructor(props: SearchResultConstructorProps<E, Filter>);
    toJSON(forceEntity?: boolean): {
        items: E[] | Required<any>[];
        total: number;
        current_page: number;
        per_page: number;
        last_page: number;
        sort: string;
        sort_dir: string;
        filter: any;
    };
}
export {};
