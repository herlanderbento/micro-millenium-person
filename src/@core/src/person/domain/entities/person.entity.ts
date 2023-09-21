import { AggregateRoot } from "../../../@seedwork/domain/entity/aggregate-root";
import { UniqueEntityId } from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";
import { EntityValidationError } from "../../../@seedwork/domain/errors/validation-error";
import { PersonValidatorFactory } from "../validation/person.validation";
import { PersonFakeBuilder } from "./person-fake-builder";

export type GenderType = "male" | "female";

export type PersonProperties = {
  userId: string;
  gender: GenderType | string;
  location: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PersonPropsJson = Required<{ id: string } & PersonProperties>;

export class PersonId extends UniqueEntityId {}

export class Person extends AggregateRoot<PersonId, PersonProperties, PersonPropsJson> {
  constructor(public readonly props: PersonProperties, entityId?: PersonId) {
    super(props, entityId ?? new PersonId());
    Person.validate(props)
    this.biography = this.props.biography ?? null;
    this.shareableSection = this.props.shareableSection ?? null;
    this.isOpenToWork = this.props.isOpenToWork ?? true;
    this.isFreelancer = this.props.isFreelancer ?? true;
    this.image = this.props.image ?? null;
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

  get location(): string {
    return this.props.location;
  }

  private set location(value: string) {
    this.props.location = value;
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

  get image(): string {
    return this.props.image;
  }

  private set image(value: string) {
    this.props.image = value ?? null;
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

  update(props: Omit<PersonProperties, "userId" | "image">): void {
    Person.validate({
      ...this.props,
      gender: props.gender,
      biography: props.biography,
      location: props.location,
      birthdate: props.birthdate,
      shareableSection: props.shareableSection,
      isOpenToWork: props.isOpenToWork,
      isFreelancer: props.isFreelancer,
    });

    this.gender = props.gender;
    this.biography = props.biography;
    this.location = props.location;
    this.birthdate = props.birthdate;
    this.shareableSection = props.shareableSection;
    this.isOpenToWork = props.isOpenToWork;
    this.isFreelancer = props.isFreelancer;
  }

  updateImage(image: string): void {
    Person.validate({
      ...this.props,
      image,
    });
    this.image = image;
  }

  static validate(props: PersonProperties) {
    const validator = PersonValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  static fake(){
    return PersonFakeBuilder()
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

  toJSON(): PersonPropsJson {
    return {
      id: this.id.toString(),
      ...this.props,
    } as PersonPropsJson;
  }
}
