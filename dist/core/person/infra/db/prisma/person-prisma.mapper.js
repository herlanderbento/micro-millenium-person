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
            shareableSection: entity.shareableSection,
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
            shareableSection: model?.shareableSection,
            isOpenToWork: model?.isOpenToWork,
            isFreelancer: model?.isFreelancer,
            avatar: model?.avatar,
            createdAt: model?.createdAt,
            updatedAt: model?.updatedAt,
        }, new domain_1.PersonId(model?.id));
    }
}
exports.PersonPrismaMapper = PersonPrismaMapper;
