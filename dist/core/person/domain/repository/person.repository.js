"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSearchResult = exports.PersonSearchParams = void 0;
const repository_1 = require("../../../shared/domain/repository");
class PersonSearchParams extends repository_1.SearchParams {
}
exports.PersonSearchParams = PersonSearchParams;
class PersonSearchResult extends repository_1.SearchResult {
}
exports.PersonSearchResult = PersonSearchResult;
