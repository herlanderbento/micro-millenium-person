import { AggregateRoot } from '../../../shared/domain/entity/aggregate-root';
import { Uuid } from '../../../shared/domain/value-objects';
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
export type PersonOutputJson = Required<{
    id: string;
} & PersonProperties>;
export declare class PersonId extends Uuid {
}
export declare class Person extends AggregateRoot<PersonId, PersonProperties, PersonOutputJson> {
    readonly props: PersonProperties;
    constructor(props: PersonProperties, entityId?: PersonId);
    get userId(): string;
    private set userId(value);
    get gender(): GenderType | string;
    private set gender(value);
    get biography(): string;
    private set biography(value);
    get address(): string;
    private set address(value);
    get shareableSection(): string;
    private set shareableSection(value);
    get birthdate(): Date;
    private set birthdate(value);
    get isOpenToWork(): boolean;
    private set isOpenToWork(value);
    get isFreelancer(): boolean;
    private set isFreelancer(value);
    get avatar(): string;
    private set avatar(value);
    get createdAt(): Date;
    get updatedAt(): Date;
    update(props: Omit<PersonProperties, 'userId' | 'avatar'>): void;
    updateAvatar(avatar: string): void;
    static validate(props: PersonProperties): void;
    static fake(): typeof PersonFakeBuilder;
    activateForWork(): void;
    deactivateForWork(): void;
    activateForFreelancer(): void;
    deactivateForFreelancer(): void;
    toJSON(): PersonOutputJson;
}
