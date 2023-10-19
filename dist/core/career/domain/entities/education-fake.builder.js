"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationFakeBuilder = void 0;
const chance_1 = require("chance");
const education_entity_1 = require("./education.entity");
class EducationFakeBuilder {
    _entityId = undefined;
    _personId = (_index) => this.chance.guid();
    _title = (_index) => this.chance.word();
    _educationType = (_index) => this.chance.word();
    _institute = (_index) => this.chance.word();
    _address = (_index) => this.chance.address();
    _startDate = (_index) => this.chance.date();
    _endDate = (_index) => this.chance.date();
    _description = (_index) => this.chance.paragraph();
    _isCurrent = (_index) => true;
    _isVerified = (_index) => true;
    _createdAt = undefined;
    _updatedAt = undefined;
    countObjs;
    static aEducation() {
        return new EducationFakeBuilder();
    }
    static theEducations(countObjs) {
        return new EducationFakeBuilder(countObjs);
    }
    chance;
    constructor(countObjs = 1) {
        this.countObjs = countObjs;
        this.chance = (0, chance_1.Chance)();
    }
    withUuid(valueOrFactory) {
        this._entityId = valueOrFactory;
        return this;
    }
    withPersonId(valueOrFactory) {
        this._personId = valueOrFactory;
        return this;
    }
    withTitle(valueOrFactory) {
        this._title = valueOrFactory;
        return this;
    }
    withEducationType(valueOrFactory) {
        this._educationType = valueOrFactory;
        return this;
    }
    withInstitute(valueOrFactory) {
        this._institute = valueOrFactory;
        return this;
    }
    withAddress(valueOrFactory) {
        this._address = valueOrFactory;
        return this;
    }
    withStartDate(valueOrFactory) {
        this._startDate = valueOrFactory;
        return this;
    }
    withEndDate(valueOrFactory) {
        this._endDate = valueOrFactory;
        return this;
    }
    withDescription(valueOrFactory) {
        this._description = valueOrFactory;
        return this;
    }
    currently() {
        this._isCurrent = true;
        return this;
    }
    uncurrently() {
        this._isCurrent = false;
        return this;
    }
    verified() {
        this._isVerified = true;
        return this;
    }
    unverified() {
        this._isVerified = false;
        return this;
    }
    withCreatedAt(valueOrFactory) {
        this._createdAt = valueOrFactory;
        return this;
    }
    withUpdatedAt(valueOrFactory) {
        this._updatedAt = valueOrFactory;
        return this;
    }
    withInvalidPersonIdTooLong(value) {
        this._personId = value ?? this.chance.word({ length: 256 });
        return this;
    }
    withInvalidTitleTooLong(value) {
        this._title = value ?? this.chance.word({ length: 256 });
        return this;
    }
    withInvalidEducationTypeTooLong(value) {
        this._educationType = value ?? this.chance.word({ length: 256 });
        return this;
    }
    withInvalidInstituteTooLong(value) {
        this._institute = value ?? this.chance.word({ length: 256 });
        return this;
    }
    build() {
        const educations = new Array(this.countObjs)
            .fill(undefined)
            .map((_, index) => {
            const education = new education_entity_1.Education({
                personId: this.callFactory(this._personId, index),
                title: this.callFactory(this._title, index),
                educationType: this.callFactory(this._educationType, index),
                institute: this.callFactory(this._institute, index),
                description: this.callFactory(this._description, index),
                address: this.callFactory(this._address, index),
                isCurrent: this.callFactory(this._isCurrent, index),
                isVerified: this.callFactory(this._isVerified, index),
                startDate: this.callFactory(this._startDate, index),
                endDate: this.callFactory(this._endDate, index),
                ...(this._createdAt && {
                    createdAt: this.callFactory(this._createdAt, index),
                }),
                ...(this._updatedAt && {
                    updatedAt: this.callFactory(this._updatedAt, index),
                }),
            }, !this._entityId ? undefined : this.callFactory(this._entityId, index));
            return education;
        });
        return this.countObjs === 1 ? educations[0] : educations;
    }
    get entityId() {
        return this.getValue('entityId');
    }
    get personId() {
        return this.getValue('personId');
    }
    get title() {
        return this.getValue('title');
    }
    get educationType() {
        return this.getValue('educationType');
    }
    get institute() {
        return this.getValue('institute');
    }
    get address() {
        return this.getValue('address');
    }
    get startDate() {
        return this.getValue('startDate');
    }
    get endDate() {
        return this.getValue('endDate');
    }
    get description() {
        return this.getValue('description');
    }
    get isVerified() {
        return this.getValue('isVerified');
    }
    get isCurrent() {
        return this.getValue('isCurrent');
    }
    get createdAt() {
        return this.getValue('createdAt');
    }
    get updatedAt() {
        return this.getValue('updatedAt');
    }
    getValue(prop) {
        const optional = ['entityId', 'createdAt', 'updatedAt'];
        const privateProp = `_${prop}`;
        if (!this[privateProp] && optional.includes(prop)) {
            throw new Error(`Property ${prop} not have a factory, use 'with' methods`);
        }
        return this.callFactory(this[privateProp], 0);
    }
    callFactory(factoryOrValue, index) {
        return typeof factoryOrValue === 'function'
            ? factoryOrValue(index)
            : factoryOrValue;
    }
}
exports.EducationFakeBuilder = EducationFakeBuilder;
