"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRange = void 0;
const value_object_1 = __importDefault(require("./value-object"));
class DateRange extends value_object_1.default {
    _startDate;
    _endDate;
    constructor(props) {
        super(props);
        this.validateDateRange(props.startDate, props.endDate);
        this._startDate = props.startDate;
        this._endDate = props.endDate;
    }
    validateDateRange(startDate, endDate) {
        if (endDate < startDate) {
            throw new Error("The end date cannot be earlier than the start date.");
        }
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        return this._endDate;
    }
    get startMonthYear() {
        const startMonth = this._startDate.getMonth() + 1;
        const startYear = this._startDate.getFullYear();
        return { month: startMonth, year: startYear };
    }
    get endMonthYear() {
        const endMonth = this._endDate.getMonth() + 1;
        const endYear = this._endDate.getFullYear();
        return { month: endMonth, year: endYear };
    }
}
exports.DateRange = DateRange;
