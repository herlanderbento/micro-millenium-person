"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../domain");
const education_output_1 = require("./education-output");
describe('EducationOutputMapper', () => {
    it('should convert a education in output', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const entity = new domain_1.Education({
            personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            description: 'some description',
            address: 'some address',
            isCurrent: true,
            isVerified: true,
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            endDate: new Date('2023-10-15T09:29:58.242Z'),
            createdAt,
            updatedAt,
        });
        const spyToJSON = jest.spyOn(entity, 'toJSON');
        const output = education_output_1.EducationOutputMapper.toOutput(entity);
        expect(spyToJSON).toHaveBeenCalled();
        expect(output).toStrictEqual({
            id: output.id,
            personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            title: 'some education',
            educationType: 'some training type',
            institute: 'some institute',
            description: 'some description',
            address: 'some address',
            isCurrent: true,
            isVerified: true,
            startDate: new Date('2023-07-15T09:29:58.242Z'),
            endDate: new Date('2023-10-15T09:29:58.242Z'),
            createdAt,
            updatedAt,
        });
    });
});
