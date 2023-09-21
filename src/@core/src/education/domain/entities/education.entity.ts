import { PersonId } from "../../../person/domain";
import {
  EntityValidationError,
  UniqueEntityId,
  AggregateRoot,
} from "../../../@seedwork/domain";
import { EducationValidatorFactory } from "../validation/education.validation";

export type EducationProperties = {
  personId: PersonId | string;
  title: string;
  educationType: string;
  institute: string;
  address?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  isCurrent?: boolean;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type EducationCreateCommand = Omit<
  EducationProperties,
  "createdAt" | "updatedAt"
>;

export type EducationUpdateCommand = Omit<
  EducationProperties,
  "personId" | "createdAt" | "updatedAt"
>;

export type EducationPropsJson = Required<{ id: string } & EducationProperties>;

export class EducationId extends UniqueEntityId {}

export class Education extends AggregateRoot<
  EducationId,
  EducationProperties,
  EducationPropsJson
> {
  constructor(
    public readonly props: EducationProperties,
    entityId?: EducationId
  ) {
    super(props, entityId ?? new EducationId());
    this.address = this.props.address ?? null;
    this.isCurrent = this.props.isCurrent ?? false;
    this.isVerified = this.props.isVerified ?? false;
    this.endDate = this.props.endDate ?? null;
    this.props.createdAt = this.props.createdAt ?? new Date();
    this.props.updatedAt = this.props.updatedAt ?? new Date();
  }

  get personId(): PersonId | string {
    return this.props.personId;
  }

  private set personId(value: PersonId | string) {
    this.props.personId = value;
  }

  get title(): string {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get educationType(): string {
    return this.props.educationType;
  }

  private set educationType(value: string) {
    this.props.educationType = value;
  }

  get institute(): string {
    return this.props.institute;
  }

  private set institute(value: string) {
    this.props.institute = value;
  }

  get address(): string {
    return this.props.address;
  }

  private set address(value: string) {
    this.props.address = value ?? null;
  }

  get startDate(): Date {
    return this.props.startDate;
  }

  private set startDate(value: Date) {
    this.props.startDate = value;
  }

  get endDate(): Date {
    return this.props.endDate;
  }

  private set endDate(value: Date) {
    this.props.endDate = value ?? null;
  }

  get description(): string {
    return this.props.description;
  }

  private set description(value: string) {
    this.props.description = value;
  }

  get isCurrent(): boolean {
    return this.props.isCurrent;
  }

  private set isCurrent(value: boolean) {
    this.props.isCurrent = value ?? false;
  }

  get isVerified(): boolean {
    return this.props.isVerified;
  }

  private set isVerified(value: boolean) {
    this.props.isVerified = value ?? false;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  verified() {
    this.isVerified = true;
  }

  unverified() {
    this.isVerified = false;
  }

  static create(props: EducationCreateCommand) {
    const education = new Education(props);
    Education.validate(props);
    return education;
  }

  update(props: EducationUpdateCommand) {
    Education.validate({
      ...this.props,
      title: props.title,
      educationType: props.educationType,
      institute: props.institute,
      address: props.address,
      isCurrent: props.isCurrent,
      isVerified: props.isVerified,
      description: props.description,
    });
    this.title = props.title;
    this.educationType = props.educationType;
    this.institute = props.institute;
    this.address = props.address;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.isCurrent = props.isCurrent;
    this.isVerified = props.isVerified;
    this.description = props.description;
  }

  static validate(props: EducationProperties) {
    const validator = EducationValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  toJSON(): EducationPropsJson {
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