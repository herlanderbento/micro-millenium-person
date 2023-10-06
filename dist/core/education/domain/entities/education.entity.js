"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = exports.EducationId = void 0;
const domain_1 = require("../../../shared/domain");
const education_validation_1 = require("../validation/education.validation");
class EducationId extends domain_1.UniqueEntityId {
}
exports.EducationId = EducationId;
class Education extends domain_1.AggregateRoot {
    props;
    constructor(props, entityId) {
        super(props, entityId ?? new EducationId());
        this.props = props;
        this.address = this.props.address ?? null;
        this.isCurrent = this.props.isCurrent ?? false;
        this.isVerified = this.props.isVerified ?? false;
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
    get educationType() {
        return this.props.educationType;
    }
    set educationType(value) {
        this.props.educationType = value;
    }
    get institute() {
        return this.props.institute;
    }
    set institute(value) {
        this.props.institute = value;
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
    get isCurrent() {
        return this.props.isCurrent;
    }
    set isCurrent(value) {
        this.props.isCurrent = value ?? false;
    }
    get isVerified() {
        return this.props.isVerified;
    }
    set isVerified(value) {
        this.props.isVerified = value ?? false;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    currently() {
        this.isCurrent = true;
    }
    uncurrently() {
        this.isCurrent = false;
    }
    verified() {
        this.isVerified = true;
    }
    unverified() {
        this.isVerified = false;
    }
    static create(props) {
        const education = new Education(props);
        Education.validate(props);
        return education;
    }
    update(props) {
        Education.validate({
            ...this.props,
            title: props.title,
            educationType: props.educationType,
            institute: props.institute,
            description: props.description,
            address: props.address,
            isCurrent: props.isCurrent,
            isVerified: props.isVerified,
        });
        this.title = props.title;
        this.description = props.description;
        this.institute = props.institute;
        this.educationType = props.educationType;
        this.address = props.address;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.isCurrent = props.isCurrent;
        this.isVerified = props.isVerified;
    }
    static validate(props) {
        const validator = education_validation_1.EducationValidatorFactory.create();
        const isValid = validator.validate(props);
        if (!isValid) {
            throw new domain_1.EntityValidationError(validator.errors);
        }
    }
    toJSON() {
        return {
            id: this.id.toString(),
            personId: this.personId,
            title: this.title,
            educationType: this.educationType,
            institute: this.institute,
            address: this.address,
            startDate: this.startDate,
            endDate: this.endDate,
            description: this.description,
            isCurrent: this.isCurrent,
            isVerified: this.isVerified,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
exports.Education = Education;
