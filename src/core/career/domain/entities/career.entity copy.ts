import { PersonId } from '../../../person/domain';
import { AggregateRoot, Uuid } from '../../../shared/domain';

export type CareerConstructorProps = {
  personId: PersonId | string;
  companyId?: string;
  title: string;
  address: string;
  startDate: Date;
  endDate?: Date;
  currentEmployer?: boolean;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CareerCommandCreate = Omit<
  CareerConstructorProps,
  'createdAt' | 'updatedAt'
>;

export type CareerPropsJson = Required<{ id: string } & CareerConstructorProps>;

export class CareerId extends Uuid {}

export class Career extends AggregateRoot<
  CareerId,
  CareerConstructorProps,
  CareerPropsJson
> {
  constructor(
    public readonly props: CareerConstructorProps,
    entityId?: CareerId
  ) {
    super(props, entityId ?? new CareerId());
    this.companyId = this.props.companyId ?? null;
    this.address = this.props.address ?? null;
    this.currentEmployer = this.props.currentEmployer ?? false;
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

  get companyId(): string {
    return this.props.companyId;
  }

  private set companyId(value: string) {
    this.props.companyId = value;
  }

  get title(): string {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
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

  get currentEmployer(): boolean {
    return this.props.currentEmployer;
  }

  private set currentEmployer(value: boolean) {
    this.props.currentEmployer = value ?? false;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  currently() {
    this.currentEmployer = true;
  }

  uncurrently() {
    this.currentEmployer = false;
  }

  static create(props: CareerCommandCreate) {
    const career = new Career(props);
    return career;
  }

  toJSON(): CareerPropsJson {
    return {
      id: this.id.toString(),
      personId: this.personId,
      title: this.title,
      companyId: this.companyId,
      address: this.address,
      startDate: this.startDate,
      endDate: this.endDate,
      description: this.description,
      currentEmployer: this.currentEmployer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
