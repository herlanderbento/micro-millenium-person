import ValueObject from "./value-object";
type IDateRange = {
    startDate: Date;
    endDate: Date;
};
type IDateRangeMonthYear = {
    month: number;
    year: number;
};
export declare class DateRange extends ValueObject {
    private _startDate;
    private _endDate;
    constructor(props: IDateRange);
    private validateDateRange;
    get startDate(): Date;
    get endDate(): Date;
    get startMonthYear(): IDateRangeMonthYear;
    get endMonthYear(): IDateRangeMonthYear;
}
export {};
