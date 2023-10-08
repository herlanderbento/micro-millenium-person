"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationInMemoryRepository = void 0;
const domain_1 = require("../../../../shared/domain");
class EducationInMemoryRepository extends domain_1.InMemorySearchableRepository {
    sortableFields = ['title', 'createdAt'];
    async applyFilter(items, filter) {
        if (!filter) {
            return items;
        }
        return items.filter((item) => {
            return item.title.toLowerCase().includes(filter.toLowerCase());
        });
    }
    async applySort(items, sort, sort_dir) {
        return sort
            ? super.applySort(items, sort, sort_dir)
            : super.applySort(items, 'createdAt', 'desc');
    }
}
exports.EducationInMemoryRepository = EducationInMemoryRepository;
