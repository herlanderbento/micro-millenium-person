"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonPrismaMapper = void 0;
const domain_1 = require("../../../domain");
class PersonPrismaMapper {
    static toModel(entity) {
        return {
            id: entity.id,
            userId: entity.userId,
            gender: entity.gender,
            address: entity.address,
            birthdate: entity.birthdate,
            biography: entity.biography,
            isOpenToWork: entity.isOpenToWork,
            isFreelancer: entity.isFreelancer,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
    static toEntity(model) {
        return new domain_1.Person({
            userId: model?.userId,
            gender: model?.gender,
            address: model?.address,
            birthdate: model?.birthdate,
            biography: model?.biography,
            isOpenToWork: model?.isOpenToWork,
            isFreelancer: model?.isFreelancer,
            avatar: model?.avatar,
            createdAt: model?.createdAt,
            updatedAt: model?.updatedAt,
        }, new domain_1.PersonId(model?.id));
    }
    static toAllModel(entity) {
        return {
            id: entity.id,
            userId: entity.userId,
            gender: entity.gender,
            address: entity.address,
            birthdate: entity.birthdate,
            biography: entity.biography,
            isOpenToWork: entity.isOpenToWork,
            isFreelancer: entity.isFreelancer,
            avatar: entity.avatar,
            educations: entity.educations.map((data) => ({
                id: data.id,
                personId: String(data.personId),
                title: data.title,
                educationType: data.educationType,
                institute: data.institute,
                address: data.address,
                startDate: data.startDate,
                endDate: data.endDate,
                description: data.description,
                isCurrent: data.isCurrent,
                isVerified: data.isVerified,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            })),
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
exports.PersonPrismaMapper = PersonPrismaMapper;
