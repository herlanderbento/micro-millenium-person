"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chance_1 = require("chance");
const education_fake_builder_1 = require("../education-fake.builder");
const domain_1 = require("../../../../shared/domain");
describe('EducationFakerBuilder Unit Tests', () => {
    describe('entityId prop', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should throw error when any with methods has called', () => {
            expect(() => faker.entityId).toThrowError(new Error("Property entityId not have a factory, use 'with' methods"));
        });
        test('should be undefined', () => {
            expect(faker['_entityId']).toBeUndefined();
        });
        test('withUuid', () => {
            const entityId = new domain_1.Uuid();
            const $this = faker.withUuid(entityId);
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_entityId']).toBe(entityId);
            faker.withUuid(() => entityId);
            expect(faker['_entityId']()).toBe(entityId);
            expect(faker.entityId).toBe(entityId);
        });
        test('should pass index to entityId factory', () => {
            let mockFactory = jest.fn(() => new domain_1.Uuid());
            faker.withUuid(mockFactory);
            faker.build();
            expect(mockFactory).toHaveBeenCalledTimes(1);
            const educationId = new domain_1.Uuid();
            mockFactory = jest.fn(() => educationId);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withUuid(mockFactory);
            fakerMany.build();
            expect(mockFactory).toHaveBeenCalledTimes(2);
            expect(fakerMany.build()[0].entityId).toBe(educationId);
            expect(fakerMany.build()[1].entityId).toBe(educationId);
        });
    });
    describe('personId props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_personId']).toBe('function');
        });
        test('should call the guid method', () => {
            const chance = (0, chance_1.Chance)();
            const spyWordMethod = jest.spyOn(chance, 'guid');
            faker['chance'] = chance;
            faker.build();
            expect(spyWordMethod).toHaveBeenCalled();
        });
        test('withPersonId', () => {
            const $this = faker.withPersonId('670d7397-7cd6-4bba-b450-73ae6376048c');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_personId']).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
            faker.withPersonId(() => '670d7397-7cd6-4bba-b450-73ae6376048c');
            expect(faker['_personId']()).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
            expect(faker.personId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
        });
        test('should pass index to personId factory', () => {
            faker.withPersonId((index) => `670d7397-7cd6-4bba-b450-73ae6376048c ${index}`);
            const education = faker.build();
            expect(education.personId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withPersonId((index) => `670d7397-7cd6-4bba-b450-73ae6376048c ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].personId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 0`);
            expect(educations[1].personId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 1`);
        });
        test('invalid too long case', () => {
            const $this = faker.withInvalidPersonIdTooLong();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_personId'].length).toBe(256);
            const tooLong = '6'.repeat(256);
            faker.withInvalidPersonIdTooLong(tooLong);
            expect(faker['_personId'].length).toBe(256);
            expect(faker['_personId']).toBe(tooLong);
        });
    });
    describe('title props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_title']).toBe('function');
        });
        test('should call the word method', () => {
            const chance = (0, chance_1.Chance)();
            const spyWordMethod = jest.spyOn(chance, 'word');
            faker['chance'] = chance;
            faker.build();
            expect(spyWordMethod).toHaveBeenCalled();
        });
        test('withTitle', () => {
            const $this = faker.withTitle('test title');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_title']).toBe('test title');
            faker.withTitle(() => 'test title');
            expect(faker['_title']()).toBe('test title');
            expect(faker.title).toBe('test title');
        });
        test('should pass index to title factory', () => {
            faker.withTitle((index) => `test title ${index}`);
            const education = faker.build();
            expect(education.title).toBe(`test title 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withTitle((index) => `test title ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].title).toBe(`test title 0`);
            expect(educations[1].title).toBe(`test title 1`);
        });
        test('invalid too long case', () => {
            const $this = faker.withInvalidTitleTooLong();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_title'].length).toBe(256);
            const tooLong = 'a'.repeat(256);
            faker.withInvalidTitleTooLong(tooLong);
            expect(faker['_title'].length).toBe(256);
            expect(faker['_title']).toBe(tooLong);
        });
    });
    describe('educationType props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_educationType']).toBe('function');
        });
        test('should call the word method', () => {
            const chance = (0, chance_1.Chance)();
            const spyWordMethod = jest.spyOn(chance, 'word');
            faker['chance'] = chance;
            faker.build();
            expect(spyWordMethod).toHaveBeenCalled();
        });
        test('withEducationType', () => {
            const $this = faker.withEducationType('test educationType');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_educationType']).toBe('test educationType');
            faker.withEducationType(() => 'test educationType');
            expect(faker['_educationType']()).toBe('test educationType');
            expect(faker.educationType).toBe('test educationType');
        });
        test('should pass index to educationType factory', () => {
            faker.withEducationType((index) => `test educationType ${index}`);
            const education = faker.build();
            expect(education.educationType).toBe(`test educationType 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withEducationType((index) => `test educationType ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].educationType).toBe(`test educationType 0`);
            expect(educations[1].educationType).toBe(`test educationType 1`);
        });
        test('invalid too long case', () => {
            const $this = faker.withInvalidEducationTypeTooLong();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_educationType'].length).toBe(256);
            const tooLong = 'a'.repeat(256);
            faker.withInvalidEducationTypeTooLong(tooLong);
            expect(faker['_educationType'].length).toBe(256);
            expect(faker['_educationType']).toBe(tooLong);
        });
    });
    describe('institute props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_institute']).toBe('function');
        });
        test('should call the word method', () => {
            const chance = (0, chance_1.Chance)();
            const spyWordMethod = jest.spyOn(chance, 'word');
            faker['chance'] = chance;
            faker.build();
            expect(spyWordMethod).toHaveBeenCalled();
        });
        test('withInstitute', () => {
            const $this = faker.withInstitute('test institute');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_institute']).toBe('test institute');
            faker.withInstitute(() => 'test institute');
            expect(faker['_institute']()).toBe('test institute');
            expect(faker.institute).toBe('test institute');
        });
        test('should pass index to institute factory', () => {
            faker.withInstitute((index) => `test institute ${index}`);
            const education = faker.build();
            expect(education.institute).toBe(`test institute 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withInstitute((index) => `test institute ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].institute).toBe(`test institute 0`);
            expect(educations[1].institute).toBe(`test institute 1`);
        });
        test('invalid too long case', () => {
            const $this = faker.withInvalidInstituteTooLong();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_institute'].length).toBe(256);
            const tooLong = 'a'.repeat(256);
            faker.withInvalidInstituteTooLong(tooLong);
            expect(faker['_institute'].length).toBe(256);
            expect(faker['_institute']).toBe(tooLong);
        });
    });
    describe('address props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_address']).toBe('function');
        });
        test('should call the word method', () => {
            const chance = (0, chance_1.Chance)();
            const spyWordMethod = jest.spyOn(chance, 'word');
            faker['chance'] = chance;
            faker.build();
            expect(spyWordMethod).toHaveBeenCalled();
        });
        test('withAddress', () => {
            const $this = faker.withAddress('test address');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_address']).toBe('test address');
            faker.withAddress(() => 'test address');
            expect(faker['_address']()).toBe('test address');
            expect(faker.address).toBe('test address');
        });
        test('should pass index to address factory', () => {
            faker.withAddress((index) => `test address ${index}`);
            const education = faker.build();
            expect(education.address).toBe(`test address 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withAddress((index) => `test address ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].address).toBe(`test address 0`);
            expect(educations[1].address).toBe(`test address 1`);
        });
    });
    describe('startDate props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_startDate']).toBe('function');
        });
        test('should call the date method', () => {
            const chance = (0, chance_1.Chance)();
            const spyDateMethod = jest.spyOn(chance, 'date');
            faker['chance'] = chance;
            faker.build();
            expect(spyDateMethod).toHaveBeenCalled();
        });
        test('withStartDate', () => {
            const date = new Date();
            const $this = faker.withStartDate(date);
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_startDate']).toBe(date);
            faker.withStartDate(() => date);
            expect(faker['_startDate']()).toBe(date);
            expect(faker.startDate).toBe(date);
        });
        test('should pass index to startDate factory', () => {
            const date = new Date();
            faker.withStartDate((index) => new Date(date.getTime() + index + 2));
            const education = faker.build();
            expect(education.startDate.getTime()).toBe(date.getTime() + 2);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withStartDate((index) => new Date(date.getTime() + index + 2));
            const educations = fakerMany.build();
            expect(educations[0].startDate.getTime()).toBe(date.getTime() + 2);
            expect(educations[1].startDate.getTime()).toBe(date.getTime() + 3);
        });
    });
    describe('endDate props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_endDate']).toBe('function');
        });
        test('should call the date method', () => {
            const chance = (0, chance_1.Chance)();
            const spyDateMethod = jest.spyOn(chance, 'date');
            faker['chance'] = chance;
            faker.build();
            expect(spyDateMethod).toHaveBeenCalled();
        });
        test('withEndDate', () => {
            const date = new Date();
            const $this = faker.withEndDate(date);
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_endDate']).toBe(date);
            faker.withEndDate(() => date);
            expect(faker['_endDate']()).toBe(date);
            expect(faker.endDate).toBe(date);
        });
        test('should pass index to endDate factory', () => {
            const date = new Date();
            faker.withEndDate((index) => new Date(date.getTime() + index + 2));
            const education = faker.build();
            expect(education.endDate.getTime()).toBe(date.getTime() + 2);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withEndDate((index) => new Date(date.getTime() + index + 2));
            const educations = fakerMany.build();
            expect(educations[0].endDate.getTime()).toBe(date.getTime() + 2);
            expect(educations[1].endDate.getTime()).toBe(date.getTime() + 3);
        });
    });
    describe('description prop', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_description']).toBe('function');
        });
        test('should call the paragraph method', () => {
            const chance = (0, chance_1.Chance)();
            const spyParagraphMethod = jest.spyOn(chance, 'paragraph');
            faker['chance'] = chance;
            faker.build();
            expect(spyParagraphMethod).toHaveBeenCalled();
        });
        test('withDescription', () => {
            const $this = faker.withDescription('test description');
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_description']).toBe('test description');
            faker.withDescription(() => 'test description');
            expect(faker['_description']()).toBe('test description');
            expect(faker.description).toBe('test description');
        });
        test('should pass index to description factory', () => {
            faker.withDescription((index) => `test description ${index}`);
            const education = faker.build();
            expect(education.description).toBe(`test description 0`);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withDescription((index) => `test description ${index}`);
            const educations = fakerMany.build();
            expect(educations[0].description).toBe(`test description 0`);
            expect(educations[1].description).toBe(`test description 1`);
        });
    });
    describe('isCurrent prop', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_isCurrent']).toBe('function');
        });
        test('currently', () => {
            const $this = faker.currently();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_isCurrent']).toBe(true);
            expect(faker.isCurrent).toBe(true);
        });
        test('uncurrently', () => {
            const $this = faker.uncurrently();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_isCurrent']).toBe(false);
            expect(faker.isCurrent).toBe(false);
        });
    });
    describe('isVerified prop', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should be a function', () => {
            expect(typeof faker['_isVerified']).toBe('function');
        });
        test('verified', () => {
            const $this = faker.verified();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_isVerified']).toBe(true);
            expect(faker.isVerified).toBe(true);
        });
        test('unverified', () => {
            const $this = faker.unverified();
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_isVerified']).toBe(false);
            expect(faker.isVerified).toBe(false);
        });
    });
    describe('createdAt props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should throw error when any with methods has called', () => {
            const fakerEducation = education_fake_builder_1.EducationFakeBuilder.aEducation();
            expect(() => fakerEducation.createdAt).toThrowError(new Error("Property createdAt not have a factory, use 'with' methods"));
        });
        test('should be undefined', () => {
            expect(faker['_createdAt']).toBeUndefined();
        });
        test('should call the date method', () => {
            const chance = (0, chance_1.Chance)();
            const spyDateMethod = jest.spyOn(chance, 'date');
            faker['chance'] = chance;
            faker.build();
            expect(spyDateMethod).toHaveBeenCalled();
        });
        test('withCreatedAt', () => {
            const date = new Date();
            const $this = faker.withCreatedAt(date);
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_createdAt']).toBe(date);
            faker.withCreatedAt(() => date);
            expect(faker['_createdAt']()).toBe(date);
            expect(faker.createdAt).toBe(date);
        });
        test('should pass index to created_at factory', () => {
            const date = new Date();
            faker.withCreatedAt((index) => new Date(date.getTime() + index + 2));
            const education = faker.build();
            expect(education.createdAt.getTime()).toBe(date.getTime() + 2);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withCreatedAt((index) => new Date(date.getTime() + index + 2));
            const educations = fakerMany.build();
            expect(educations[0].createdAt.getTime()).toBe(date.getTime() + 2);
            expect(educations[1].createdAt.getTime()).toBe(date.getTime() + 3);
        });
    });
    describe('updatedAt props', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        test('should throw error when any with methods has called', () => {
            const fakerEducation = education_fake_builder_1.EducationFakeBuilder.aEducation();
            expect(() => fakerEducation.updatedAt).toThrowError(new Error("Property updatedAt not have a factory, use 'with' methods"));
        });
        test('should be undefined', () => {
            expect(faker['_updatedAt']).toBeUndefined();
        });
        test('should call the date method', () => {
            const chance = (0, chance_1.Chance)();
            const spyDateMethod = jest.spyOn(chance, 'date');
            faker['chance'] = chance;
            faker.build();
            expect(spyDateMethod).toHaveBeenCalled();
        });
        test('withUpdatedAt', () => {
            const date = new Date();
            const $this = faker.withUpdatedAt(date);
            expect($this).toBeInstanceOf(education_fake_builder_1.EducationFakeBuilder);
            expect(faker['_updatedAt']).toBe(date);
            faker.withUpdatedAt(() => date);
            expect(faker['_updatedAt']()).toBe(date);
            expect(faker.updatedAt).toBe(date);
        });
        test('should pass index to created_at factory', () => {
            const date = new Date();
            faker.withUpdatedAt((index) => new Date(date.getTime() + index + 2));
            const education = faker.build();
            expect(education.updatedAt.getTime()).toBe(date.getTime() + 2);
            const fakerMany = education_fake_builder_1.EducationFakeBuilder.theEducations(2);
            fakerMany.withUpdatedAt((index) => new Date(date.getTime() + index + 2));
            const educations = fakerMany.build();
            expect(educations[0].updatedAt.getTime()).toBe(date.getTime() + 2);
            expect(educations[1].updatedAt.getTime()).toBe(date.getTime() + 3);
        });
    });
    test('should create a education', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.aEducation();
        let education = faker.build();
        expect(education.entityId).toBeInstanceOf(domain_1.Uuid);
        expect(typeof education.personId === 'string').toBeTruthy();
        expect(typeof education.title === 'string').toBeTruthy();
        expect(typeof education.educationType === 'string').toBeTruthy();
        expect(typeof education.institute === 'string').toBeTruthy();
        expect(typeof education.description === 'string').toBeTruthy();
        expect(typeof education.address === 'string').toBeTruthy();
        expect(education.startDate).toBeInstanceOf(Date);
        expect(education.endDate).toBeInstanceOf(Date);
        expect(education.isCurrent).toBe(true);
        expect(education.isVerified).toBe(true);
        expect(education.createdAt).toBeInstanceOf(Date);
        expect(education.updatedAt).toBeInstanceOf(Date);
        const createdAt = new Date();
        const updatedAt = new Date();
        const startDate = new Date();
        const endDate = new Date();
        const educationId = new domain_1.Uuid();
        education = faker
            .withUuid(educationId)
            .withPersonId('670d7397-7cd6-4bba-b450-73ae6376048c')
            .withTitle('title test')
            .withEducationType('education test')
            .withInstitute('institute test')
            .withAddress('address test')
            .withDescription('description test')
            .withStartDate(startDate)
            .withEndDate(endDate)
            .uncurrently()
            .unverified()
            .withCreatedAt(createdAt)
            .withUpdatedAt(updatedAt)
            .build();
        expect(education.entityId.id).toBe(educationId.id);
        expect(education.personId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
        expect(education.title).toBe('title test');
        expect(education.educationType).toBe('education test');
        expect(education.institute).toBe('institute test');
        expect(education.address).toBe('address test');
        expect(education.startDate).toBe(startDate);
        expect(education.endDate).toBe(endDate);
        expect(education.isCurrent).toBe(false);
        expect(education.isVerified).toBe(false);
        expect(education.createdAt).toBe(createdAt);
        expect(education.updatedAt).toBe(updatedAt);
    });
    test('should create many educations', () => {
        const faker = education_fake_builder_1.EducationFakeBuilder.theEducations(4);
        let educations = faker.build();
        educations.forEach((education) => {
            expect(education.entityId).toBeInstanceOf(domain_1.Uuid);
            expect(typeof education.personId === 'string').toBeTruthy();
            expect(typeof education.title === 'string').toBeTruthy();
            expect(typeof education.educationType === 'string').toBeTruthy();
            expect(typeof education.institute === 'string').toBeTruthy();
            expect(typeof education.description === 'string').toBeTruthy();
            expect(typeof education.address === 'string').toBeTruthy();
            expect(education.startDate).toBeInstanceOf(Date);
            expect(education.endDate).toBeInstanceOf(Date);
            expect(education.isCurrent).toBe(true);
            expect(education.isVerified).toBe(true);
            expect(education.createdAt).toBeInstanceOf(Date);
            expect(education.updatedAt).toBeInstanceOf(Date);
        });
        const createdAt = new Date();
        const updatedAt = new Date();
        const startDate = new Date();
        const endDate = new Date();
        const educationId = new domain_1.Uuid();
        educations = faker
            .withUuid(educationId)
            .withPersonId('670d7397-7cd6-4bba-b450-73ae6376048c')
            .withTitle('title test')
            .withEducationType('education test')
            .withInstitute('institute test')
            .withAddress('address test')
            .withDescription('description test')
            .withStartDate(startDate)
            .withEndDate(endDate)
            .uncurrently()
            .unverified()
            .withCreatedAt(createdAt)
            .withUpdatedAt(updatedAt)
            .build();
        educations.forEach((education) => {
            expect(education.entityId.id).toBe(educationId.id);
            expect(education.personId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
            expect(education.title).toBe('title test');
            expect(education.educationType).toBe('education test');
            expect(education.institute).toBe('institute test');
            expect(education.address).toBe('address test');
            expect(education.startDate).toBe(startDate);
            expect(education.endDate).toBe(endDate);
            expect(education.isCurrent).toBe(false);
            expect(education.isVerified).toBe(false);
            expect(education.createdAt).toBe(createdAt);
            expect(education.updatedAt).toBe(updatedAt);
        });
    });
});
