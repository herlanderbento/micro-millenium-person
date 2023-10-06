import { PersonId } from '../../../person/domain';
import { UniqueEntityId, AggregateRoot } from '../../../shared/domain';
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
export type EducationCreateCommand = Omit<EducationProperties, 'createdAt' | 'updatedAt'>;
export type EducationUpdateCommand = Omit<EducationProperties, 'personId' | 'createdAt' | 'updatedAt'>;
export type EducationPropsJson = Required<{
    id: string;
} & EducationProperties>;
export declare class EducationId extends UniqueEntityId {
}
export declare class Education extends AggregateRoot<EducationId, EducationProperties, EducationPropsJson> {
    readonly props: EducationProperties;
    constructor(props: EducationProperties, entityId?: EducationId);
    get personId(): PersonId | string;
    private set personId(value);
    get title(): string;
    private set title(value);
    get educationType(): string;
    private set educationType(value);
    get institute(): string;
    private set institute(value);
    get address(): string;
    private set address(value);
    get startDate(): Date;
    private set startDate(value);
    get endDate(): Date;
    private set endDate(value);
    get description(): string;
    private set description(value);
    get isCurrent(): boolean;
    private set isCurrent(value);
    get isVerified(): boolean;
    private set isVerified(value);
    get createdAt(): Date;
    get updatedAt(): Date;
    currently(): void;
    uncurrently(): void;
    verified(): void;
    unverified(): void;
    static create(props: EducationCreateCommand): Education;
    update(props: EducationUpdateCommand): void;
    static validate(props: EducationProperties): void;
    toJSON(): EducationPropsJson;
}
