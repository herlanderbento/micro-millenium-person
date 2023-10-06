"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationInMemoryRepository = void 0;
const domain_1 = require("../../../../shared/domain");
class EducationInMemoryRepository extends domain_1.InMemorySearchableRepository {
    async applyFilter(items, filter) {
        if (!filter) {
            return items;
        }
    }
    async applySort(items, sort, sort_dir) {
        return !sort
            ? super.applySort(items, 'createdAt', 'desc')
            : super.applySort(items, sort, sort_dir);
    }
}
exports.EducationInMemoryRepository = EducationInMemoryRepository;
