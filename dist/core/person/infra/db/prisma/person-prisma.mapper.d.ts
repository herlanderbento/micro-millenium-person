import { Person as PersonModel } from '@prisma/client';
import { Person } from '../../../domain';
export declare class PersonPrismaMapper {
    static toModel(entity: Person): {
        id: string;
        userId: string;
        gender: string;
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
    static toEntity(model: PersonModel): Person;
}
