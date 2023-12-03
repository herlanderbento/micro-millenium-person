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
export type CareerCommandCreate = Omit<CareerConstructorProps, 'createdAt' | 'updatedAt'>;
export type CareerPropsJson = Required<{
    id: string;
} & CareerConstructorProps>;
export declare class CareerId extends Uuid {
}
export declare class Career extends AggregateRoot<CareerId, CareerConstructorProps, CareerPropsJson> {
    readonly props: CareerConstructorProps;
    constructor(props: CareerConstructorProps, entityId?: CareerId);
    get personId(): PersonId | string;
    private set personId(value);
    get companyId(): string;
    private set companyId(value);
    get title(): string;
    private set title(value);
    get address(): string;
    private set address(value);
    get startDate(): Date;
    private set startDate(value);
    get endDate(): Date;
    private set endDate(value);
    get description(): string;
    private set description(value);
    get currentEmployer(): boolean;
    private set currentEmployer(value);
    get createdAt(): Date;
    get updatedAt(): Date;
    currently(): void;
    uncurrently(): void;
    static create(props: CareerCommandCreate): Career;
    toJSON(): CareerPropsJson;
}
