import { GenderType } from "./person.entity";
export declare function PersonFakeBuilder(): {
    id: string;
    userId: string;
    gender: GenderType;
    address: string;
    birthdate: Date;
    biography: string;
    shareableSection: string;
    isOpenToWork: boolean;
    isFreelancer: boolean;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
};
