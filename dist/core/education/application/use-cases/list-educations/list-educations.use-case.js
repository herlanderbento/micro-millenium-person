"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEducationsUseCase = void 0;
const domain_1 = require("../../../../person/domain");
const application_1 = require("../../../../shared/application");
const common_1 = require("../common");
class ListEducationsUseCase {
    educationRepository;
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async execute(input) {
        const params = new domain_1.PersonSearchParams(input);
        const searchResult = await this.educationRepository.search(params);
        return this.toOutput(searchResult);
    }
    toOutput(searchResult) {
        const { items: _items } = searchResult;
        const items = _items.map((item) => {
            return common_1.EducationOutputMapper.toOutput(item);
        });
        return application_1.PaginationOutputMapper.toOutput(items, searchResult);
    }
}
exports.ListEducationsUseCase = ListEducationsUseCase;
