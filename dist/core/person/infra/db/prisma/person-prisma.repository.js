"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonPrismaRepository = void 0;
const domain_1 = require("../../../domain");
const prisma_client_1 = require("../../../../shared/infra/prisma/prisma-client");
const person_prisma_mapper_1 = require("./person-prisma.mapper");
const domain_2 = require("../../../../shared/domain");
class PersonPrismaRepository {
    sortableFields = ['createdAt'];
    async insert(entity) {
        await prisma_client_1.prismaClient.person.create({
            data: person_prisma_mapper_1.PersonPrismaMapper.toModel(entity),
        });
    }
    async bulkInsert(entities) {
        const modelsProps = entities.map((entity) => person_prisma_mapper_1.PersonPrismaMapper.toModel(entity));
        await prisma_client_1.prismaClient.person.createMany({
            data: modelsProps,
        });
    }
    async findById(id, unrelated) {
        const _id = `${id}`;
        const baseQuery = {
            where: { id: _id },
        };
        if (unrelated === true) {
            const model = await prisma_client_1.prismaClient.person.findUnique(baseQuery);
            return model ? person_prisma_mapper_1.PersonPrismaMapper.toEntity(model) : null;
        }
        const model = await prisma_client_1.prismaClient.person.findUnique({
            ...baseQuery,
            include: {
                educations: true,
            },
        });
        if (!model) {
            throw new domain_2.NotFoundError(`Entity Not Found using ID ${_id}`);
        }
        return person_prisma_mapper_1.PersonPrismaMapper.toAllModel(model);
    }
    async update(entity) {
        const model = await prisma_client_1.prismaClient.person.update({
            where: { id: entity.id },
            data: person_prisma_mapper_1.PersonPrismaMapper.toModel(entity),
        });
        return person_prisma_mapper_1.PersonPrismaMapper.toEntity(model);
    }
    async search(props) {
        const sortable = props.sort && this.sortableFields.includes(props.sort);
        const count = await prisma_client_1.prismaClient.person.count();
        const models = await prisma_client_1.prismaClient.person.findMany({
            orderBy: {
                [sortable ? props.sort : 'createdAt']: sortable
                    ? props.sort_dir
                    : 'desc',
            },
            skip: (props.page - 1) * props.per_page,
            take: props.per_page,
        });
        return new domain_1.PersonSearchResult({
            items: models.map((model) => person_prisma_mapper_1.PersonPrismaMapper.toEntity(model)),
            total: count,
            current_page: props.page,
            per_page: props.per_page,
            sort: props.sort,
            sort_dir: props.sort_dir,
            filter: props.filter,
        });
    }
    async findAll() {
        const models = await prisma_client_1.prismaClient.person.findMany();
        return models.map(person_prisma_mapper_1.PersonPrismaMapper.toEntity);
    }
    async delete(id) {
        const _id = `${id}`;
        await prisma_client_1.prismaClient.person.delete({ where: { id: _id } });
    }
}
exports.PersonPrismaRepository = PersonPrismaRepository;
