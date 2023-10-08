"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../domain");
const education_in_memory_repository_1 = require("./education-in-memory.repository");
describe('EducationInMemoryRepository', () => {
    let repository;
    beforeEach(() => (repository = new education_in_memory_repository_1.EducationInMemoryRepository()));
    it('should no filter items when filter object is null', async () => {
        const items = [domain_1.Education.fake().aEducation().build()];
        const filterSpy = jest.spyOn(items, 'filter');
        const itemsFiltered = await repository['applyFilter'](items, null);
        expect(filterSpy).not.toHaveBeenCalled();
        expect(itemsFiltered).toStrictEqual(items);
    });
    it('should filter items using filter parameter', async () => {
        const items = [
            domain_1.Education.fake().aEducation().withTitle('test').build(),
            domain_1.Education.fake().aEducation().withTitle('TEST').build(),
            domain_1.Education.fake().aEducation().withTitle('fake').build(),
        ];
        const filterSpy = jest.spyOn(items, 'filter');
        const itemsFiltered = await repository['applyFilter'](items, 'TEST');
        expect(filterSpy).toHaveBeenCalledTimes(1);
        expect(itemsFiltered).toStrictEqual([items[0], items[1]]);
    });
    it('should sort by createdAt when sort param is null', async () => {
        const created_at = new Date();
        const items = [
            domain_1.Education.fake()
                .aEducation()
                .withTitle('test')
                .withCreatedAt(created_at)
                .build(),
            domain_1.Education.fake()
                .aEducation()
                .withTitle('TEST')
                .withCreatedAt(new Date(created_at.getTime() + 100))
                .build(),
            domain_1.Education.fake()
                .aEducation()
                .withTitle('fake')
                .withCreatedAt(new Date(created_at.getTime() + 200))
                .build(),
        ];
        const itemsSorted = await repository['applySort'](items, null, null);
        expect(itemsSorted).toStrictEqual([items[2], items[1], items[0]]);
    });
    it("should sort by title", async () => {
        const items = [
            domain_1.Education.fake().aEducation().withTitle("c").build(),
            domain_1.Education.fake().aEducation().withTitle("b").build(),
            domain_1.Education.fake().aEducation().withTitle("a").build(),
        ];
        let itemsSorted = await repository["applySort"](items, "title", "asc");
        expect(itemsSorted).toStrictEqual([items[2], items[1], items[0]]);
        itemsSorted = await repository["applySort"](items, "title", "desc");
        expect(itemsSorted).toStrictEqual([items[0], items[1], items[2]]);
    });
});
