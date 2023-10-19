"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationPrismaMapper = void 0;
const domain_1 = require("../../../domain");
class EducationPrismaMapper {
    static toModel(entity) {
        return {
            id: entity.id,
            personId: String(entity.personId),
            title: entity.title,
            educationType: entity.educationType,
            institute: entity.institute,
            address: entity.address,
            startDate: entity.startDate,
            endDate: entity.endDate,
            description: entity.description,
            isCurrent: entity.isCurrent,
            isVerified: entity.isVerified,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
    static toEntity(model) {
        return new domain_1.Education({
            personId: model.personId,
            title: model.title,
            educationType: model.educationType,
            institute: model.institute,
            address: model?.address,
            description: model.description,
            isCurrent: model?.isCurrent,
            isVerified: model?.isVerified,
            startDate: model.startDate,
            endDate: model?.endDate,
            createdAt: model?.createdAt,
            updatedAt: model?.updatedAt,
        }, new domain_1.EducationId(model?.id));
    }
}
exports.EducationPrismaMapper = EducationPrismaMapper;
