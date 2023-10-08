import { Person, PersonId } from './person.entity';
type PropOrFactory<T> = T | ((index: number) => T);
export declare class PersonFakeBuilder<TBuild = any> {
    private _entityId;
    private _userId;
    private _gender;
    private _address;
    private _birthdate;
    private _biography;
    private _shareableSection;
    private _avatar;
    private _isOpenToWork;
    private _isFreelancer;
    private _createdAt;
    private _updatedAt;
    private countObjs;
    static aPerson(): PersonFakeBuilder<Person>;
    static thePersons(countObjs: number): PersonFakeBuilder<Person[]>;
    private chance;
    private constructor();
    withUuid(valueOrFactory: PropOrFactory<PersonId>): this;
    withUserId(valueOrFactory: PropOrFactory<string>): this;
    withGender(valueOrFactory: PropOrFactory<string>): this;
    withAddress(valueOrFactory: PropOrFactory<string>): this;
    withBirthdate(valueOrFactory: PropOrFactory<Date>): this;
    withBiography(valueOrFactory: PropOrFactory<string>): this;
    withShareableSection(valueOrFactory: PropOrFactory<string>): this;
    activateForWork(): this;
    deactivateForWork(): this;
    activateForFreelancer(): this;
    deactivateForFreelancer(): this;
    withAvatar(valueOrFactory: PropOrFactory<string>): this;
    withCreatedAt(valueOrFactory: PropOrFactory<Date>): this;
    withUpdatedAt(valueOrFactory: PropOrFactory<Date>): this;
    withInvalidUserIdTooLong(value?: string): this;
    withInvalidGenderTooLong(value?: string): this;
    withInvalidBiographyTooLong(value?: string): this;
    build(): TBuild;
    get entityId(): any;
    get userId(): any;
    get gender(): any;
    get address(): any;
    get birthdate(): any;
    get biography(): any;
    get shareableSection(): any;
    get isOpenToWork(): any;
    get isFreelancer(): any;
    get avatar(): any;
    get createdAt(): any;
    get updatedAt(): any;
    private getValue;
    private callFactory;
}
export {};
