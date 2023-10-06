"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_range_vo_1 = require("../date-range.vo");
describe("DateRange", () => {
    const validStartDate = new Date("2023-01-01");
    const validEndDate = new Date("2023-01-10");
    it("should create a valid DateRange", () => {
        const dateRange = new date_range_vo_1.DateRange({
            startDate: validStartDate,
            endDate: validEndDate,
        });
        expect(dateRange.startDate).toEqual(validStartDate);
        expect(dateRange.endDate).toEqual(validEndDate);
    });
    it("should throw an error for an invalid DateRange", () => {
        const invalidStartDate = new Date("2023-01-15");
        expect(() => {
            new date_range_vo_1.DateRange({
                startDate: invalidStartDate,
                endDate: validEndDate,
            });
        }).toThrowError("The end date cannot be earlier than the start date.");
    });
    it("should calculate startMonthYear and endMonthYear", () => {
        const dateRange = new date_range_vo_1.DateRange({
            startDate: validStartDate,
            endDate: validEndDate,
        });
        expect(dateRange.startMonthYear).toEqual({ month: 1, year: 2023 });
        expect(dateRange.endMonthYear).toEqual({ month: 1, year: 2023 });
    });
});
