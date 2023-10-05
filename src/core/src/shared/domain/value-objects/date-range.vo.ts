import ValueObject from "./value-object";

type IDateRange = {
  startDate: Date;
  endDate: Date;
};

type IDateRangeMonthYear = {
  month: number;
  year: number;
};

export class DateRange extends ValueObject {
  private _startDate: Date;
  private _endDate: Date;

  constructor(props: IDateRange) {
    super(props);
    this.validateDateRange(props.startDate, props.endDate);
    this._startDate = props.startDate;
    this._endDate = props.endDate;
  }

  private validateDateRange(startDate: Date, endDate: Date): void {
    if (endDate < startDate) {
      throw new Error("The end date cannot be earlier than the start date.");
    }
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date {
    return this._endDate;
  }

  get startMonthYear(): IDateRangeMonthYear {
    const startMonth = this._startDate.getMonth() + 1;
    const startYear = this._startDate.getFullYear();
    return { month: startMonth, year: startYear };
  }

  get endMonthYear(): IDateRangeMonthYear {
    const endMonth = this._endDate.getMonth() + 1;
    const endYear = this._endDate.getFullYear();
    return { month: endMonth, year: endYear };
  }
}
