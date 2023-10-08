import { GenderType } from '../../../domain';
export type UpdatePersonInput = {
    id: string;
    gender: GenderType;
    address: string;
    birthdate: Date;
    biography?: string;
    shareableSection?: string;
};
