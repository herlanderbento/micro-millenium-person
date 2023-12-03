import { Person as PersonModel } from '@prisma/client';
import { Person } from '../../../domain';
interface EducationProps {
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
}
type PersonOutput = {
    id: string;
    userId: string;
    gender: string;
    address: string;
    birthdate: Date;
    biography: string;
    isOpenToWork: boolean;
    isFreelancer: boolean;
    avatar: string;
    educations: Array<EducationProps>;
    createdAt: Date;
    updatedAt: Date;
};
export declare class PersonPrismaMapper {
    static toModel(entity: Person): {
        id: string;
        userId: string;
        gender: string;
        address: string;
        birthdate: Date;
        biography: string;
        isOpenToWork: boolean;
        isFreelancer: boolean;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    };
    static toEntity(model: PersonModel): Person;
    static toAllModel(entity: PersonOutput): {
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
