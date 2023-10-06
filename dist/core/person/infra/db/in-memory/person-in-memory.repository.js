"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonInMemoryRepository = void 0;
const in_memory_repository_1 = require("../../../../shared/domain/repository/in-memory-repository");
class PersonInMemoryRepository extends in_memory_repository_1.InMemorySearchableRepository {
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
exports.PersonInMemoryRepository = PersonInMemoryRepository;
