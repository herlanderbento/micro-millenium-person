import { DateRange } from "../date-range.vo";

describe("DateRange", () => {
  const validStartDate = new Date("2023-01-01");
  const validEndDate = new Date("2023-01-10");

  it("should create a valid DateRange", () => {
    const dateRange = new DateRange({
      startDate: validStartDate,
      endDate: validEndDate,
    });

    expect(dateRange.startDate).toEqual(validStartDate);
    expect(dateRange.endDate).toEqual(validEndDate);
  });

  it("should throw an error for an invalid DateRange", () => {
    const invalidStartDate = new Date("2023-01-15");

    expect(() => {
      new DateRange({
        startDate: invalidStartDate,
        endDate: validEndDate,
      });
    }).toThrowError("The end date cannot be earlier than the start date.")
  });

  it("should calculate startMonthYear and endMonthYear", () => {
    const dateRange = new DateRange({
      startDate: validStartDate,
      endDate: validEndDate,
    });

    expect(dateRange.startMonthYear).toEqual({ month: 1, year: 2023 });
    expect(dateRange.endMonthYear).toEqual({ month: 1, year: 2023 });
  });
});
