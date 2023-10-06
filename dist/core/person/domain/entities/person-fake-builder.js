"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFakeBuilder = void 0;
const faker_1 = require("@faker-js/faker");
function PersonFakeBuilder() {
    return {
        id: faker_1.faker.string.uuid(),
        userId: faker_1.faker.string.uuid(),
        gender: faker_1.faker.person.gender(),
        address: faker_1.faker.address.toString(),
        birthdate: faker_1.faker.date.past(),
        biography: faker_1.faker.lorem.word(),
        shareableSection: faker_1.faker.lorem.paragraph(),
        isOpenToWork: faker_1.faker.datatype.boolean(),
        isFreelancer: faker_1.faker.datatype.boolean(),
        avatar: faker_1.faker.image.avatar(),
        createdAt: faker_1.faker.date.past(),
        updatedAt: faker_1.faker.date.recent(),
    };
}
exports.PersonFakeBuilder = PersonFakeBuilder;
