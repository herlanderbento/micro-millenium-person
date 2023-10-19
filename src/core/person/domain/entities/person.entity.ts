import { AggregateRoot } from '../../../shared/domain/entity/aggregate-root';
import { Uuid } from '../../../shared/domain/value-objects';
import { EntityValidationError } from '../../../shared/domain/errors/validation-error';
import { PersonValidatorFactory } from '../validation/person.validation';
import { PersonFakeBuilder } from './person-fake-builder';

export type GenderType = 'male' | 'female';

export type PersonProperties = {
  userId: string;
  gender: GenderType | string;
  address: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PersonOutputJson = Required<{ id: string } & PersonProperties>;

export class PersonId extends Uuid {}

export class Person extends AggregateRoot<
  PersonId,
  PersonProperties,
  PersonOutputJson
> {
  constructor(public readonly props: PersonProperties, entityId?: PersonId) {
    super(props, entityId ?? new PersonId());
    // Person.validate(props);
    this.biography = this.props.biography ?? null;
    this.shareableSection = this.props.shareableSection ?? null;
    this.isOpenToWork = this.props.isOpenToWork ?? true;
    this.isFreelancer = this.props.isFreelancer ?? true;
    this.avatar = this.props.avatar ?? null;
    this.props.createdAt = this.props.createdAt ?? new Date();
    this.props.updatedAt = this.props.updatedAt ?? new Date();
  }

  get userId(): string {
    return this.props.userId;
  }

  private set userId(value: string) {
    this.props.userId = value;
  }

  get gender(): GenderType | string {
    return this.props.gender;
  }

  private set gender(value: GenderType | string) {
    this.props.gender = value;
  }

  get biography(): string {
    return this.props.biography;
  }

  private set biography(value: string) {
    this.props.biography = value ?? null;
  }

  get address(): string {
    return this.props.address;
  }

  private set address(value: string) {
    this.props.address = value;
  }

  get shareableSection(): string {
    return this.props.shareableSection;
  }

  private set shareableSection(value: string) {
    this.props.shareableSection = value ?? null;
  }

  get birthdate(): Date {
    return this.props.birthdate;
  }

  private set birthdate(value: Date) {
    this.props.birthdate = value;
  }

  get isOpenToWork(): boolean {
    return this.props.isOpenToWork;
  }

  private set isOpenToWork(value: boolean) {
    this.props.isOpenToWork = value ?? true;
  }

  get isFreelancer(): boolean {
    return this.props.isFreelancer;
  }

  private set isFreelancer(value: boolean) {
    this.props.isFreelancer = value ?? true;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  private set avatar(value: string) {
    this.props.avatar = value ?? null;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  // static create(props: PersonProperties): Person {
  //   const Person = new Person(props);
  //   Person.validate(Person);
  //   return Person;
  // }

  update(props: Omit<PersonProperties, 'userId' | 'avatar'>): void {
    // Person.validate({
    //   ...this.props,
    //   gender: props.gender,
    //   biography: props.biography,
    //   address: props.address,
    //   birthdate: props.birthdate,
    //   shareableSection: props.shareableSection,
    //   isOpenToWork: props.isOpenToWork,
    //   isFreelancer: props.isFreelancer,
    // });

    this.gender = props.gender;
    this.biography = props.biography;
    this.address = props.address;
    this.birthdate = props.birthdate;
    this.shareableSection = props.shareableSection;
    this.isOpenToWork = props.isOpenToWork;
    this.isFreelancer = props.isFreelancer;
  }

  updateAvatar(avatar: string): void {
    console.log(avatar, 'avatar2')
    // Person.validate({
    //   ...this.props,
    //   avatar,
    // });
    this.avatar = avatar;
  }

  static validate(props: PersonProperties) {
    const validator = PersonValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  static fake() {
    return PersonFakeBuilder;
  }

  activateForWork(): void {
    this.props.isOpenToWork = true;
  }

  deactivateForWork(): void {
    this.props.isOpenToWork = false;
  }

  activateForFreelancer(): void {
    this.props.isFreelancer = true;
  }

  deactivateForFreelancer(): void {
    this.props.isFreelancer = false;
  }

  toJSON(): PersonOutputJson {
    return {
      id: this.id.toString(),
      userId: this.userId,
      gender: this.gender,
      address: this.address,
      birthdate: this.birthdate,
      biography: this.biography,
      shareableSection: this.shareableSection,
      isOpenToWork: this.isOpenToWork,
      isFreelancer: this.isFreelancer,
      avatar: this.avatar,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
