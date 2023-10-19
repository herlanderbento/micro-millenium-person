import { Education } from '../../../domain';
import { Education as EducationModel } from '@prisma/client';
export declare class EducationPrismaMapper {
    static toModel(entity: Education): {
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
    };
    static toEntity(model: EducationModel): Education;
}
