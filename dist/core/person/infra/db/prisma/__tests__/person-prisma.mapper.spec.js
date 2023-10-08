"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const person_prisma_mapper_1 = require("../person-prisma.mapper");
describe('PersonPrismaMapper', () => {
    test('should mapper entity to model', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const entity = new domain_1.Person({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            shareableSection: 'some shareable sections',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        });
        const model = person_prisma_mapper_1.PersonPrismaMapper.toModel(entity);
        expect(model).toStrictEqual({
            id: model.id,
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            shareableSection: 'some shareable sections',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        });
    });
    test('should mapper model to entity', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const model = {
            id: '46f61619-ea05-4adf-aa5e-9844aded12fc',
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            shareableSection: 'some shareable sections',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        };
        const entity = person_prisma_mapper_1.PersonPrismaMapper.toEntity(model);
        expect(entity.id).toBe('46f61619-ea05-4adf-aa5e-9844aded12fc');
        expect(entity).toMatchObject({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            shareableSection: 'some shareable sections',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        });
    });
});
