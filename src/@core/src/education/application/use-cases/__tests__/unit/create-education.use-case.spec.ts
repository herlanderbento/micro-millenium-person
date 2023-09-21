import { Person } from "../../../../../person/domain";
import { PersonInMemoryRepository } from "../../../../../person/infra";

import { EducationInMemoryRepository } from "../../../../infra/db/in-memory/education-in-memory.repository";
import { CreateEducationUseCase } from "../../create-education.use-case";

describe("Create education unit tests", () => {
  // let repository: EducationInMemoryRepository;
  // let miraRepository: PersonInMemoryRepository;
  // let useCase: CreateEducationUseCase;

  // beforeEach(() => {
  //   // repository: new EducationInMemoryRepository();
  //   // miraRepository: new PersonInMemoryRepository();
  //   // useCase = new CreateEducationUseCase(repository, miraRepository);
  // });

  it("should create a education default values", async () => {
    // // const mira = new Mira({
    // //   userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    // //   gender: "male",
    // //   location: "location",
    // //   birthdate: new Date("2001-07-15T09:29:58.242Z"),
    // // });


    // // const output = await useCase.execute({
    // //   PersonId: mira.id,
    // //   title: "some education",
    // //   educationType: "some training type",
    // //   institute: "some institute",
    // //   startDate: new Date("2023-07-15T09:29:58.242Z"),
    // //   description: "some description",
    // // });

    // // console.log(output);


    // expect(output).toStrictEqual({
    //   id: repository.items[0].id,
    //   PersonId: new PersonId("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"),
    //   title: "some education",
    //   educationType: "some training type",
    //   institute: "some institute",
    //   address: "some address",
    //   description: "some description",
    //   isCurrent: true,
    //   isVerified: true,
    //   startDate: new Date("2023-07-15T09:29:58.242Z"),
    //   endDate: new Date("2023-10-15T09:29:58.242Z"),
    //   createdAt: repository.items[0].createdAt,
    //   updatedAt: repository.items[0].updatedAt,
    // });
  });
});
