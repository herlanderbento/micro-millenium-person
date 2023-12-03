import { GenderType, Person } from '../../../domain';
interface EducationProps {
    id: string;
    personId: string;
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
}
export type PersonOutput = {
    id: string;
    userId: string;
    gender: GenderType | string;
    address: string;
    birthdate: Date;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
};
export type PersonAllOutput = {
    id: string;
    userId: string;
    gender: GenderType | string;
    address: string;
    birthdate: Date;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
    avatar?: string;
    educations?: Array<EducationProps>;
    createdAt: Date;
    updatedAt: Date;
};
export declare class PersonOutputMapper {
    static toOutput(entity: Person): Required<{
        id: string;
    } & import("../../../domain").PersonProperties>;
    static toAllOutput(entity: PersonAllOutput): {
        id: string;
        userId: string;
        gender: string;
        address: string;
        birthdate: Date;
        biography: string;
        isOpenToWork: boolean;
        isFreelancer: boolean;
        avatar: string;
        educations: {
            id: string;
            personId: string;
            title: string;
            educationType: string;
            institute: string;
            address: string;
            startDate: Date;
            endDate: Date;
            description: string;
            isCurrent: boolean;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        createdAt: Date;
        updatedAt: Date;
    };
}
export {};
