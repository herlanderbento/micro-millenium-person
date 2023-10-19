import { PersonId } from '../../../../person/domain';
export type CreateEducationInput = {
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
