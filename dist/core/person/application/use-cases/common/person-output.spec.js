"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../domain");
const person_output_1 = require("./person-output");
describe('PersonOutputMapper', () => {
    it('should convert a mira in output', () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const entity = new domain_1.Person({
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        });
        const spyToJSON = jest.spyOn(entity, 'toJSON');
        const output = person_output_1.PersonOutputMapper.toOutput(entity);
        expect(spyToJSON).toHaveBeenCalled();
        expect(output).toStrictEqual({
            id: entity.id,
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            gender: 'male',
            biography: 'some biography',
            address: 'address',
            birthdate: new Date('2001-07-15T09:29:58.242Z'),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: 'some avatar',
            createdAt,
            updatedAt,
        });
    });
});
