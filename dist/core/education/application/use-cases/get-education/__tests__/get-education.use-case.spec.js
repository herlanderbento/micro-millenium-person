"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../../../shared/domain");
const domain_2 = require("../../../../domain");
const infra_1 = require("../../../../infra");
const get_education_use_case_1 = require("../get-education.use-case");
describe('GetEducationUseCase Unit Tests', () => {
    let repository;
    let useCase;
    beforeEach(() => {
        repository = new infra_1.EducationInMemoryRepository();
        useCase = new get_education_use_case_1.GetEducationUseCase(repository);
    });
    it('should throws error when entity not found', async () => {
        await expect(() => useCase.execute({
            id: 'fake id',
        })).rejects.toThrow(new domain_1.NotFoundError(`Entity Not Found using ID fake id`));
    });
    it('should return a education', async () => {
        const education = domain_2.Education.create({
            personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            description: 'some description',
        });
        repository.insert(education);
        await useCase.execute({
            id: education.id,
        });
        expect(education).toMatchObject({
            personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            description: 'some description',
        });
        expect(education.id).toBeDefined();
        expect(education.address).toBeNull();
        expect(education.isCurrent).toBeFalsy();
        expect(education.isVerified).toBeFalsy();
        expect(education.endDate).toBeNull();
        expect(education.createdAt).toBeInstanceOf(Date);
        expect(education.updatedAt).toBeInstanceOf(Date);
    });
});
