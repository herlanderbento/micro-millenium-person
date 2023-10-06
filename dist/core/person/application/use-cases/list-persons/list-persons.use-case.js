"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonsUseCase = void 0;
const domain_1 = require("../../../domain");
const application_1 = require("../../../../shared/application");
const common_1 = require("../common");
class ListPersonsUseCase {
    personRepository;
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async execute(input) {
        const params = new domain_1.PersonSearchParams(input);
        const searchResult = await this.personRepository.search(params);
        return this.toOutput(searchResult);
    }
    toOutput(searchResult) {
        const { items: _items } = searchResult;
        const items = _items.map((item) => {
            return common_1.PersonOutputMapper.toOutput(item);
        });
        return application_1.PaginationOutputMapper.toOutput(items, searchResult);
    }
}
exports.ListPersonsUseCase = ListPersonsUseCase;
