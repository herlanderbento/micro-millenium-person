import { Chance } from 'chance';

import { Person, PersonId } from './person.entity';

type PropOrFactory<T> = T | ((index: number) => T);

export class PersonFakeBuilder<TBuild = any> {
  private _entityId = undefined;

  private _userId: PropOrFactory<string> = (_index) => this.chance.guid();

  private _gender: PropOrFactory<string> = (_index) => this.chance.gender();

  private _address: PropOrFactory<string> = (_index) => this.chance.address();

  private _birthdate: PropOrFactory<Date> = (_index) => this.chance.date();

  private _biography: PropOrFactory<string> | undefined = (_index) =>
    this.chance.paragraph();

  private _avatar: PropOrFactory<string> | undefined = (_index) =>
    this.chance.avatar();

  private _isOpenToWork: PropOrFactory<boolean> = (_index) => true;

  private _isFreelancer: PropOrFactory<boolean> = (_index) => true;

  private _createdAt: PropOrFactory<Date> | undefined = undefined;

  private _updatedAt: PropOrFactory<Date> | undefined = undefined;

  private countObjs;

  static aPerson() {
    return new PersonFakeBuilder<Person>();
  }

  static thePersons(countObjs: number) {
    return new PersonFakeBuilder<Person[]>(countObjs);
  }

  private chance: Chance.Chance;

  private constructor(countObjs: number = 1) {
    this.countObjs = countObjs;
    this.chance = Chance();
  }

  withUuid(valueOrFactory: PropOrFactory<PersonId>): this {
    this._entityId = valueOrFactory;
    return this;
  }

  withUserId(valueOrFactory: PropOrFactory<string>): this {
    this._userId = valueOrFactory;
    return this;
  }

  withGender(valueOrFactory: PropOrFactory<string>): this {
    this._gender = valueOrFactory;
    return this;
  }

  withAddress(valueOrFactory: PropOrFactory<string>): this {
    this._address = valueOrFactory;
    return this;
  }

  withBirthdate(valueOrFactory: PropOrFactory<Date>): this {
    this._birthdate = valueOrFactory;
    return this;
  }

  withBiography(valueOrFactory: PropOrFactory<string>): this {
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

  withAvatar(valueOrFactory: PropOrFactory<string>): this {
    this._avatar = valueOrFactory;
    return this;
  }

  withCreatedAt(valueOrFactory: PropOrFactory<Date>) {
    this._createdAt = valueOrFactory;
    return this;
  }

  withUpdatedAt(valueOrFactory: PropOrFactory<Date>) {
    this._updatedAt = valueOrFactory;
    return this;
  }

  withInvalidUserIdTooLong(value?: string) {
    this._userId = value ?? this.chance.word({ length: 256 });
    return this;
  }

  withInvalidGenderTooLong(value?: string) {
    this._gender = value ?? this.chance.word({ length: 6 });
    return this;
  }

  withInvalidBiographyTooLong(value?: string) {
    this._biography = value ?? this.chance.word({ length: 256 });
    return this;
  }

  build(): TBuild {
    const persons = new Array(this.countObjs)
      .fill(undefined)
      .map((_, index) => {
        const person = new Person(
          {
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
          },
          !this._entityId ? undefined : this.callFactory(this._entityId, index)
        );
        return person;
      });
    return this.countObjs === 1 ? (persons[0] as any) : persons;
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

  private getValue(prop: string) {
    const optional = ['entityId', 'createdAt', 'updatedAt'];
    const privateProp = `_${prop}`;
    if (!this[privateProp] && optional.includes(prop)) {
      throw new Error(
        `Property ${prop} not have a factory, use 'with' methods`
      );
    }
    return this.callFactory(this[privateProp], 0);
  }

  private callFactory(factoryOrValue: PropOrFactory<any>, index: number) {
    return typeof factoryOrValue === 'function'
      ? factoryOrValue(index)
      : factoryOrValue;
  }
}
