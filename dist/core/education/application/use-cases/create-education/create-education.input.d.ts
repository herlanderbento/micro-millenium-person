import { PersonId } from '../../../../person/domain';
export type CreateEductionInputConstructorProps = {
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
};
export declare class CreateEducationInput {
    personId: PersonId | string;
    title: string;
    educationType: string;
    institute: string;
    address: string;
    isCurrent: boolean;
    description: string;
    isVerified: boolean;
    startDate: Date;
    endDate?: Date;
    constructor(props: CreateEductionInputConstructorProps);
}
export declare class ValidateCreateEducationInput {
    static validate(input: CreateEducationInput): import("class-validator").ValidationError[];
}
