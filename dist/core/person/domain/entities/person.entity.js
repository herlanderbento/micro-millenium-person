"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.PersonId = void 0;
const aggregate_root_1 = require("../../../shared/domain/entity/aggregate-root");
const value_objects_1 = require("../../../shared/domain/value-objects");
const validation_error_1 = require("../../../shared/domain/errors/validation-error");
const person_validation_1 = require("../validation/person.validation");
const person_fake_builder_1 = require("./person-fake-builder");
class PersonId extends value_objects_1.Uuid {
}
exports.PersonId = PersonId;
class Person extends aggregate_root_1.AggregateRoot {
    props;
    constructor(props, entityId) {
        super(props, entityId ?? new PersonId());
        this.props = props;
        this.biography = this.props.biography ?? null;
        this.shareableSection = this.props.shareableSection ?? null;
        this.isOpenToWork = this.props.isOpenToWork ?? true;
        this.isFreelancer = this.props.isFreelancer ?? true;
        this.avatar = this.props.avatar ?? null;
        this.props.createdAt = this.props.createdAt ?? new Date();
        this.props.updatedAt = this.props.updatedAt ?? new Date();
    }
    get userId() {
        return this.props.userId;
    }
    set userId(value) {
        this.props.userId = value;
    }
    get gender() {
        return this.props.gender;
    }
    set gender(value) {
        this.props.gender = value;
    }
    get biography() {
        return this.props.biography;
    }
    set biography(value) {
        this.props.biography = value ?? null;
    }
    get address() {
        return this.props.address;
    }
    set address(value) {
        this.props.address = value;
    }
    get shareableSection() {
        return this.props.shareableSection;
    }
    set shareableSection(value) {
        this.props.shareableSection = value ?? null;
    }
    get birthdate() {
        return this.props.birthdate;
    }
    set birthdate(value) {
        this.props.birthdate = value;
    }
    get isOpenToWork() {
        return this.props.isOpenToWork;
    }
    set isOpenToWork(value) {
        this.props.isOpenToWork = value ?? true;
    }
    get isFreelancer() {
        return this.props.isFreelancer;
    }
    set isFreelancer(value) {
        this.props.isFreelancer = value ?? true;
    }
    get avatar() {
        return this.props.avatar;
    }
    set avatar(value) {
        this.props.avatar = value ?? null;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    update(props) {
        this.gender = props.gender;
        this.biography = props.biography;
        this.address = props.address;
        this.birthdate = props.birthdate;
        this.shareableSection = props.shareableSection;
        this.isOpenToWork = props.isOpenToWork;
        this.isFreelancer = props.isFreelancer;
    }
    updateAvatar(avatar) {
        Person.validate({
            ...this.props,
            avatar,
        });
        this.avatar = avatar;
    }
    static validate(props) {
        const validator = person_validation_1.PersonValidatorFactory.create();
        const isValid = validator.validate(props);
        if (!isValid) {
            throw new validation_error_1.EntityValidationError(validator.errors);
        }
    }
    static fake() {
        return person_fake_builder_1.PersonFakeBuilder;
    }
    activateForWork() {
        this.props.isOpenToWork = true;
    }
    deactivateForWork() {
        this.props.isOpenToWork = false;
    }
    activateForFreelancer() {
        this.props.isFreelancer = true;
    }
    deactivateForFreelancer() {
        this.props.isFreelancer = false;
    }
    toJSON() {
        return {
            id: this.id.toString(),
            ...this.props,
        };
    }
}
exports.Person = Person;
