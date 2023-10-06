"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_result_1 = require("../../domain/repository/search-result");
const pagination_output_1 = require("./pagination-output");
describe("PaginationOutputMapper unit tests", () => {
    it("should convert a SearchResult in output", () => {
        const result = new search_result_1.SearchResult({
            items: ["fake"],
            total: 1,
            current_page: 1,
            per_page: 1,
            sort: "name",
            sort_dir: "desc",
            filter: "fake",
        });
        const output = pagination_output_1.PaginationOutputMapper.toOutput(result.items, result);
        expect(output).toStrictEqual({
            items: ["fake"],
            total: 1,
            current_page: 1,
            last_page: 1,
            per_page: 1,
        });
    });
});
