import { GenderType, Person } from '../../../domain';
export type PersonOutput = {
    id: string;
    userId: string;
    gender: GenderType | string;
    address: string;
    birthdate: Date;
    biography?: string;
    shareableSection?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare class PersonOutputMapper {
    static toOutput(entity: Person): Required<{
        id: string;
    } & import("../../../domain").PersonProperties>;
}
