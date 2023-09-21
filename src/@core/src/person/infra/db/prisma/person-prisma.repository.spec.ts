import { PrismaClient } from "@prisma/client";
import { PersonPrismaRepository } from "./person-prisma.repository";

describe("PersonPrismaRepository", () => {
  const prismaClient = new PrismaClient();
  let repository: PersonPrismaRepository;

  beforeEach(async () => {
    repository = new PersonPrismaRepository();
    // await prismaClient.mira.deleteMany();
  });

  afterAll(async () => {
    // await prismaClient.mira.deleteMany();
    await prismaClient.$disconnect();
  });

  it("should create a mira", async () => {
    // const props  = {
    //   userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    //   gender: "male",
    //   location: "location",
    //   birthdate: new Date("2001-07-15T09:29:58.242Z"),
    // } as MiraCreateCommand
    
    // let entity = Mira.create(props);

    // await repository.create(entity);

    // let output = await prismaClient.mira.findUnique({
    //   where: { id: entity.id },
    // });

    // expect(output).toEqual(entity.toJSON());

    // entity = new Mira({
    //   userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    //   gender: "male",
    //   location: "location",
    //   birthdate: new Date("2001-07-15T09:29:58.242Z"),
    //   biography: "some biography",
    //   shareableSection: "some shareable section",
    //   isOpenToWork: true,
    //   isFreelancer: true,
    //   image: "some image",
    // });

    // await repository.create(entity);

    // output = await prismaClient.mira.findUnique({ where: { id: entity.id } });

    // expect(output).toEqual(entity.toJSON());
  });

  // it("should throws error when entity is not found", async () => {
  //   await expect(repository.findById("fake id")).rejects.toThrow(
  //     new NotFoundError(`Entity Not Found using ID fake id`)
  //   );

  //   await expect(
  //     repository.findById(new PersonId("025a9698-d6a6-43fa-943f-3a2b21b6709a"))
  //   ).rejects.toThrow(
  //     new NotFoundError(
  //       "Entity Not Found using ID 025a9698-d6a6-43fa-943f-3a2b21b6709a"
  //     )
  //   );
  // });

  // it("should find a entity by id", async () => {
  //   const entity = new Mira({
  //     userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  //     gender: "male",
  //     location: "location",
  //     birthdate: new Date("2001-07-15T09:29:58.242Z"),
  //   });

  //   await repository.create(entity);

  //   let output = await repository.findById(entity.id);

  //   expect(entity.toJSON()).toStrictEqual(output.toJSON());
  // });

  // it("should return all mira", async () => {
  //   let entity = new Mira({
  //     userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  //     gender: "male",
  //     location: "location",
  //     birthdate: new Date("2001-07-15T09:29:58.242Z"),
  //   });

  //   await repository.create(entity);

  //   const entities = await repository.findAll();

  //   // expect(entities).toHaveLength(1);
  //   expect(JSON.stringify(entities)).toBe(JSON.stringify([entity]));
  //   entities.map((item) =>
  //     expect(item.toJSON()).toStrictEqual(entity.toJSON())
  //   );
  // });

  it("should throw error on update when a entity not found", async () => {
    // const entity =  Mira.fake()
    // console.log(entity)
    // expect(await repository.update(entity)).rejects.toThrow(
    //   new NotFoundError(`Entity Not Found using ID ${entity.id}`)
    // );
  });
});
