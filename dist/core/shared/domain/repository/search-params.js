"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = void 0;
class SearchParams {
    _page;
    _per_page = 15;
    _sort;
    _sort_dir;
    _filter;
    constructor(props = {}) {
        this.page = props.page;
        this.per_page = props.per_page;
        this.sort = props.sort;
        this.sort_dir = props.sort_dir;
        this.filter = props.filter;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        let _page = +value;
        if (Number.isNaN(_page) || _page <= 0 || parseInt(_page) !== _page) {
            _page = 1;
        }
        this._page = _page;
    }
    get per_page() {
        return this._per_page;
    }
    set per_page(value) {
        let _per_page = value === true ? this._per_page : +value;
        if (Number.isNaN(_per_page) ||
            _per_page <= 0 ||
            parseInt(_per_page) !== _per_page) {
            _per_page = this._per_page;
        }
        this._per_page = _per_page;
    }
    get sort() {
        return this._sort;
    }
    set sort(value) {
        this._sort =
            value === null || value === undefined || value === "" ? null : `${value}`;
    }
    get sort_dir() {
        return this._sort_dir;
    }
    set sort_dir(value) {
        if (!this.sort) {
            this._sort_dir = null;
            return;
        }
        const dir = `${value}`.toLowerCase();
        this._sort_dir = dir !== "asc" && dir !== "desc" ? "asc" : dir;
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter =
            value === null || value === undefined || value === ""
                ? null
                : `${value}`;
    }
}
exports.SearchParams = SearchParams;
