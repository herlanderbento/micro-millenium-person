import { Person } from "../../../../domain";
import { PersonInMemoryRepository } from "../../../../infra";
import { DeletePersonUseCase } from "../../delete-person.use-case";
import { NotFoundError } from "../../../../../@seedwork/domain";

describe("DeletePersonUseCase Unit Tests", () => {
  let repository: PersonInMemoryRepository;
  let useCase: DeletePersonUseCase;

  beforeEach(() => {
    repository = new PersonInMemoryRepository();
    useCase = new DeletePersonUseCase(repository);
  });

  it("should throws error when entity not found", async () => {
    await expect(() =>
      useCase.execute({
        id: "fake id",
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it("should delete a Person", async () => {
    const entity = new Person({
      userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      gender: "male",
      location: "location",
      birthdate: new Date("2001-07-15T09:29:58.242Z"),
    });
    repository.create(entity);

    await useCase.execute({
      id: entity.id,
    });
    expect(repository.items).toHaveLength(0);
  });
});
