import { faker } from "@faker-js/faker";
import { GenderType } from "./person.entity";

export function PersonFakeBuilder() {
  return {
    userId: faker.string.uuid(),
    gender: faker.person.gender() as GenderType,
    location: faker.location.toString(),
    birthdate: faker.date.past(),
    biography: faker.lorem.word(),
    shareableSection: faker.lorem.paragraph(),
    isOpenToWork: faker.datatype.boolean(),
    isFreelancer: faker.datatype.boolean(),
    image: faker.image.avatar(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}
