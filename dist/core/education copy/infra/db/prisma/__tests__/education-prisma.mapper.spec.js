"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../domain");
const education_prisma_mapper_1 = require("../education-prisma.mapper");
describe('EducationPrismaMapper', () => {
    test('should map entity to model', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const entity = new domain_1.Education({
            personId: '46f61619-ea05-4adf-aa5e-9844aded12fc',
            title: 'Bachelor of Science',
            educationType: 'Degree',
            institute: 'Metropolitan University of Angola IMETRO',
            address: 'Bento Hill University St',
            startDate: new Date('2022-01-01'),
            endDate: new Date('2023-05-01'),
            description: 'Studied computer science.',
            isCurrent: false,
            isVerified: true,
            createdAt,
            updatedAt,
        });
        const model = education_prisma_mapper_1.EducationPrismaMapper.toModel(entity);
        expect(model).toStrictEqual({
            id: entity.id,
            personId: '46f61619-ea05-4adf-aa5e-9844aded12fc',
            title: 'Bachelor of Science',
            educationType: 'Degree',
            institute: 'Metropolitan University of Angola IMETRO',
            address: 'Bento Hill University St',
            startDate: new Date('2022-01-01'),
            endDate: new Date('2023-05-01'),
            description: 'Studied computer science.',
            isCurrent: false,
            isVerified: true,
            createdAt,
            updatedAt,
        });
    });
    test('should map model to entity', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const model = {
            id: '46f61619-ea05-4adf-aa5e-9844aded12fc',
            personId: 'fe51e631-44c4-4f21-b6de-df1060176085',
            title: 'Bachelor of Science',
            educationType: 'Degree',
            institute: 'Metropolitan University of Angola IMETRO',
            address: 'Bento Hill University St',
            startDate: new Date('2022-01-01'),
            endDate: new Date('2022-05-01'),
            description: 'Studied computer science.',
            isCurrent: false,
            isVerified: true,
            createdAt,
            updatedAt,
        };
        const entity = education_prisma_mapper_1.EducationPrismaMapper.toEntity(model);
        expect(entity.id).toBe('46f61619-ea05-4adf-aa5e-9844aded12fc');
        expect(entity).toMatchObject({
            personId: 'fe51e631-44c4-4f21-b6de-df1060176085',
            title: 'Bachelor of Science',
            educationType: 'Degree',
            institute: 'Metropolitan University of Angola IMETRO',
            address: 'Bento Hill University St',
            startDate: new Date('2022-01-01'),
            endDate: new Date('2022-05-01'),
            description: 'Studied computer science.',
            isCurrent: false,
            isVerified: true,
            createdAt,
            updatedAt,
        });
    });
});
