"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFakeBuilder = void 0;
const chance_1 = require("chance");
const person_entity_1 = require("./person.entity");
class PersonFakeBuilder {
    _entityId = undefined;
    _userId = (_index) => this.chance.guid();
    _gender = (_index) => this.chance.gender();
    _address = (_index) => this.chance.address();
    _birthdate = (_index) => this.chance.date();
    _biography = (_index) => this.chance.paragraph();
    _avatar = (_index) => this.chance.avatar();
    _isOpenToWork = (_index) => true;
    _isFreelancer = (_index) => true;
    _createdAt = undefined;
    _updatedAt = undefined;
    countObjs;
    static aPerson() {
        return new PersonFakeBuilder();
    }
    static thePersons(countObjs) {
        return new PersonFakeBuilder(countObjs);
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
    withUserId(valueOrFactory) {
        this._userId = valueOrFactory;
        return this;
    }
    withGender(valueOrFactory) {
        this._gender = valueOrFactory;
        return this;
    }
    withAddress(valueOrFactory) {
        this._address = valueOrFactory;
        return this;
    }
    withBirthdate(valueOrFactory) {
        this._birthdate = valueOrFactory;
        return this;
    }
    withBiography(valueOrFactory) {
        this._biography = valueOrFactory;
        return this;
    }
    activateForWork() {
        this._isOpenToWork = true;
        return this;
    }
    deactivateForWork() {
        this._isOpenToWork = false;
        return this;
    }
    activateForFreelancer() {
        this._isFreelancer = true;
        return this;
    }
    deactivateForFreelancer() {
        this._isFreelancer = false;
        return this;
    }
    withAvatar(valueOrFactory) {
        this._avatar = valueOrFactory;
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
    withInvalidUserIdTooLong(value) {
        this._userId = value ?? this.chance.word({ length: 256 });
        return this;
    }
    withInvalidGenderTooLong(value) {
        this._gender = value ?? this.chance.word({ length: 6 });
        return this;
    }
    withInvalidBiographyTooLong(value) {
        this._biography = value ?? this.chance.word({ length: 256 });
        return this;
    }
    build() {
        const persons = new Array(this.countObjs)
            .fill(undefined)
            .map((_, index) => {
            const person = new person_entity_1.Person({
                userId: this.callFactory(this._userId, index),
                gender: this.callFactory(this._gender, index),
                biography: this.callFactory(this._biography, index),
                address: this.callFactory(this._address, index),
                birthdate: this.callFactory(this._birthdate, index),
                isOpenToWork: this.callFactory(this._isOpenToWork, index),
                isFreelancer: this.callFactory(this._isFreelancer, index),
                avatar: this.callFactory(this._avatar, index),
                ...(this._createdAt && {
                    createdAt: this.callFactory(this._createdAt, index),
                }),
                ...(this._updatedAt && {
                    updatedAt: this.callFactory(this._updatedAt, index),
                }),
            }, !this._entityId ? undefined : this.callFactory(this._entityId, index));
            return person;
        });
        return this.countObjs === 1 ? persons[0] : persons;
    }
    get entityId() {
        return this.getValue('entityId');
    }
    get userId() {
        return this.getValue('userId');
    }
    get gender() {
        return this.getValue('gender');
    }
    get address() {
        return this.getValue('address');
    }
    get birthdate() {
        return this.getValue('birthdate');
    }
    get biography() {
        return this.getValue('biography');
    }
    get isOpenToWork() {
        return this.getValue('isOpenToWork');
    }
    get isFreelancer() {
        return this.getValue('isFreelancer');
    }
    get avatar() {
        return this.getValue('avatar');
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
exports.PersonFakeBuilder = PersonFakeBuilder;
