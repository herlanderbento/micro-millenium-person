"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationPrismaRepository = void 0;
const domain_1 = require("../../../domain");
const prisma_client_1 = require("../../../../shared/infra/prisma/prisma-client");
const education_prisma_mapper_1 = require("./education-prisma.mapper");
const domain_2 = require("../../../../shared/domain");
class EducationPrismaRepository {
    sortableFields = ['title', 'createdAt'];
    async create(entity) {
        await prisma_client_1.prismaClient.education.create({
            data: education_prisma_mapper_1.EducationPrismaMapper.toModel(entity),
        });
    }
    async bulkCreate(entities) {
        const modelsProps = entities.map((entity) => education_prisma_mapper_1.EducationPrismaMapper.toModel(entity));
        await prisma_client_1.prismaClient.education.createMany({
            data: modelsProps,
        });
    }
    async findById(id) {
        const _id = `${id}`;
        const model = await prisma_client_1.prismaClient.education.findUnique({
            where: { id: _id },
        });
        return model ? education_prisma_mapper_1.EducationPrismaMapper.toEntity(model) : null;
    }
    async findAll() {
        const models = await prisma_client_1.prismaClient.education.findMany();
        return models.map((model) => {
            return education_prisma_mapper_1.EducationPrismaMapper.toEntity(model);
        });
    }
    async update(entity) {
        const model = await prisma_client_1.prismaClient.education.update({
            where: { id: entity.id },
            data: education_prisma_mapper_1.EducationPrismaMapper.toModel(entity),
        });
        return education_prisma_mapper_1.EducationPrismaMapper.toEntity(model);
    }
    async search(props) {
        const sortable = props.sort && this.sortableFields.includes(props.sort);
        const count = await prisma_client_1.prismaClient.education.count();
        const models = await prisma_client_1.prismaClient.education.findMany({
            ...(props.filter && {
                where: {
                    title: {
                        contains: props.filter,
                        mode: 'insensitive',
                    }
                },
            }),
            orderBy: {
                [sortable ? props.sort : 'createdAt']: sortable
                    ? props.sort_dir
                    : 'desc',
            },
            skip: (props.page - 1) * props.per_page,
            take: props.per_page,
        });
        return new domain_1.EducationSearchResult({
            items: models.map((model) => education_prisma_mapper_1.EducationPrismaMapper.toEntity(model)),
            total: count,
            current_page: props.page,
            per_page: props.per_page,
            sort: props.sort,
            sort_dir: props.sort_dir,
            filter: props.filter,
        });
    }
    async delete(id) {
        const _id = `${id}`;
        await prisma_client_1.prismaClient.education.delete({ where: { id: _id } });
    }
    async _get(id) {
        try {
            const user = await prisma_client_1.prismaClient.education.findUnique({
                where: { id },
            });
            return education_prisma_mapper_1.EducationPrismaMapper.toEntity(user);
        }
        catch {
            throw new domain_2.NotFoundError(`Education not found using ID ${id}`);
        }
    }
}
exports.EducationPrismaRepository = EducationPrismaRepository;
