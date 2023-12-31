export type GenderType = 'male' | 'female';
export type CreatePersonInput = {
    userId: string;
    gender: GenderType | string;
    address: string;
    birthdate: Date;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
};
