"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySearchableRepository = exports.InMemoryRepository = void 0;
const not_found_error_1 = __importDefault(require("../errors/not-found.error"));
const search_result_1 = require("./search-result");
class InMemoryRepository {
    items = [];
    async create(entity) {
        this.items.push(entity);
    }
    async bulkCreate(entities) {
        this.items.push(...entities);
    }
    async findById(id) {
        const _id = `${id}`;
        return this._get(_id);
    }
    async findAll() {
        return this.items;
    }
    async update(entity) {
        await this._get(entity.id);
        const indexFound = this.items.findIndex((i) => i.id === entity.id);
        return this.items[indexFound] = entity;
    }
    async delete(id) {
        const _id = `${id}`;
        await this._get(_id);
        const indexFound = this.items.findIndex((i) => i.id === _id);
        this.items.splice(indexFound, 1);
    }
    async _get(id) {
        const item = this.items.find((i) => i.id === id);
        if (!item) {
            throw new not_found_error_1.default(`Entity Not Found using ID ${id}`);
        }
        return item;
    }
}
exports.InMemoryRepository = InMemoryRepository;
class InMemorySearchableRepository extends InMemoryRepository {
    sortableFields = [];
    async search(props) {
        const itemsFiltered = await this.applyFilter(this.items, props.filter);
        const itemsSorted = await this.applySort(itemsFiltered, props.sort, props.sort_dir);
        const itemsPaginated = await this.applyPaginate(itemsSorted, props.page, props.per_page);
        return new search_result_1.SearchResult({
            items: itemsPaginated,
            total: itemsFiltered.length,
            current_page: props.page,
            per_page: props.per_page,
            sort: props.sort,
            sort_dir: props.sort_dir,
            filter: props.filter,
        });
    }
    async applySort(items, sort, sort_dir, custom_getter) {
        if (!sort || !this.sortableFields.includes(sort)) {
            return items;
        }
        return [...items].sort((a, b) => {
            const aValue = custom_getter ? custom_getter(sort, a) : a.props[sort];
            const bValue = custom_getter ? custom_getter(sort, b) : b.props[sort];
            if (aValue < bValue) {
                return sort_dir === "asc" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sort_dir === "asc" ? 1 : -1;
            }
            return 0;
        });
    }
    async applyPaginate(items, page, per_page) {
        const start = (page - 1) * per_page;
        const limit = start + per_page;
        return items.slice(start, limit);
    }
}
exports.InMemorySearchableRepository = InMemorySearchableRepository;
