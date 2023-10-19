"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Career = exports.CareerId = void 0;
const domain_1 = require("../../../shared/domain");
class CareerId extends domain_1.Uuid {
}
exports.CareerId = CareerId;
class Career extends domain_1.AggregateRoot {
    props;
    constructor(props, entityId) {
        super(props, entityId ?? new CareerId());
        this.props = props;
        this.address = this.props.address ?? null;
        this.currentEmployer = this.props.currentEmployer ?? false;
        this.endDate = this.props.endDate ?? null;
        this.props.createdAt = this.props.createdAt ?? new Date();
        this.props.updatedAt = this.props.updatedAt ?? new Date();
    }
    get personId() {
        return this.props.personId;
    }
    set personId(value) {
        this.props.personId = value;
    }
    get title() {
        return this.props.title;
    }
    set title(value) {
        this.props.title = value;
    }
    get company() {
        return this.props.company;
    }
    set company(value) {
        this.props.company = value;
    }
    get address() {
        return this.props.address;
    }
    set address(value) {
        this.props.address = value ?? null;
    }
    get startDate() {
        return this.props.startDate;
    }
    set startDate(value) {
        this.props.startDate = value;
    }
    get endDate() {
        return this.props.endDate;
    }
    set endDate(value) {
        this.props.endDate = value ?? null;
    }
    get description() {
        return this.props.description;
    }
    set description(value) {
        this.props.description = value;
    }
    get currentEmployer() {
        return this.props.currentEmployer;
    }
    set currentEmployer(value) {
        this.props.currentEmployer = value ?? false;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    currently() {
        this.currentEmployer = true;
    }
    uncurrently() {
        this.currentEmployer = false;
    }
    static create(props) {
        const career = new Career(props);
        return career;
    }
    toJSON() {
        return;
    }
}
exports.Career = Career;
