"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonOutputMapper = void 0;
class PersonOutputMapper {
    static toOutput(entity) {
        return entity.toJSON();
    }
    static toAllOutput(entity) {
        return {
            id: entity.id,
            userId: entity.gender,
            gender: entity.gender,
            address: entity.address,
            birthdate: entity.birthdate,
            biography: entity.biography,
            shareableSection: entity.shareableSection,
            isOpenToWork: entity.isOpenToWork,
            isFreelancer: entity.isFreelancer,
            avatar: entity.avatar,
            educations: entity.educations.map((item) => ({
                id: item.id,
                personId: item.personId,
                title: item.title,
                educationType: item.educationType,
                institute: item.institute,
                address: item.address,
                startDate: item.startDate,
                endDate: item.endDate,
                description: item.description,
                isCurrent: item.isCurrent,
                isVerified: item.isVerified,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
            })),
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
exports.PersonOutputMapper = PersonOutputMapper;
