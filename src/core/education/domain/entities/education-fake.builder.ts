import { Chance } from 'chance';
import { Education, EducationId } from './education.entity';

type PropOrFactory<T> = T | ((index: number) => T);

export class EducationFakeBuilder<TBuild = any> {
  private _entityId = undefined;

  private _personId: PropOrFactory<string> = (_index) => this.chance.guid();

  private _title: PropOrFactory<string> = (_index) => this.chance.word();

  private _educationType: PropOrFactory<string> = (_index) =>
    this.chance.word();

  private _institute: PropOrFactory<string> = (_index) => this.chance.word();

  private _address: PropOrFactory<string | null> = (_index) =>
    this.chance.address();

  private _startDate: PropOrFactory<Date> = (_index) => this.chance.date();

  private _endDate: PropOrFactory<Date> | undefined = (_index) =>
    this.chance.date();

  private _description: PropOrFactory<string> = (_index) =>
    this.chance.paragraph();

  private _isCurrent: PropOrFactory<boolean> = (_index) => true;

  private _isVerified: PropOrFactory<boolean> = (_index) => true;

  private _createdAt: PropOrFactory<Date> | undefined = undefined;

  private _updatedAt: PropOrFactory<Date> | undefined = undefined;

  private countObjs;

  static aEducation() {
    return new EducationFakeBuilder<Education>();
  }

  static theEducations(countObjs: number) {
    return new EducationFakeBuilder<Education[]>(countObjs);
  }

  private chance: Chance.Chance;

  private constructor(countObjs: number = 1) {
    this.countObjs = countObjs;
    this.chance = Chance();
  }

  withUuid(valueOrFactory: PropOrFactory<EducationId>): this {
    this._entityId = valueOrFactory;
    return this;
  }

  withPersonId(valueOrFactory: PropOrFactory<string>) {
    this._personId = valueOrFactory;
    return this;
  }

  withTitle(valueOrFactory: PropOrFactory<string>) {
    this._title = valueOrFactory;
    return this;
  }

  withEducationType(valueOrFactory: PropOrFactory<string>) {
    this._educationType = valueOrFactory;
    return this;
  }

  withInstitute(valueOrFactory: PropOrFactory<string>) {
    this._institute = valueOrFactory;
    return this;
  }

  withAddress(valueOrFactory: PropOrFactory<string | null>) {
    this._address = valueOrFactory;
    return this;
  }

  withStartDate(valueOrFactory: PropOrFactory<Date>) {
    this._startDate = valueOrFactory;
    return this;
  }

  withEndDate(valueOrFactory: PropOrFactory<Date>) {
    this._endDate = valueOrFactory;
    return this;
  }

  withDescription(valueOrFactory: PropOrFactory<string>) {
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

  withCreatedAt(valueOrFactory: PropOrFactory<Date>) {
    this._createdAt = valueOrFactory;
    return this;
  }

  withUpdatedAt(valueOrFactory: PropOrFactory<Date>) {
    this._updatedAt = valueOrFactory;
    return this;
  }

  withInvalidPersonIdTooLong(value?: string) {
    this._personId = value ?? this.chance.word({ length: 256 });
    return this;
  }

  withInvalidTitleTooLong(value?: string) {
    this._title = value ?? this.chance.word({ length: 256 });
    return this;
  }

  withInvalidEducationTypeTooLong(value?: string) {
    this._educationType = value ?? this.chance.word({ length: 256 });
    return this;
  }

  withInvalidInstituteTooLong(value?: string) {
    this._institute = value ?? this.chance.word({ length: 256 });
    return this;
  }

  build(): TBuild {
    const educations = new Array(this.countObjs)
      .fill(undefined)
      .map((_, index) => {
        const education = new Education(
          {
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
          },
          !this._entityId ? undefined : this.callFactory(this._entityId, index)
        );
        return education;
      });
    return this.countObjs === 1 ? (educations[0] as any) : educations;
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
