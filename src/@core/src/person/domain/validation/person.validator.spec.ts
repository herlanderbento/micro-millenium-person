import { GenderType } from "../entities/person.entity";
import PersonValidatorFactory, {
  PersonRules,
  PersonValidator,
} from "./person.validation";

describe("PersonValidator Tests", () => {
  let validator: PersonValidator;

  beforeEach(() => (validator = PersonValidatorFactory.create()));

  test("invalidation cases for userId field", () => {
    expect({ validator, data: null }).containsErrorMessages({
      userId: [
        "userId should not be empty",
        "userId must be a string",
        "userId must be shorter than or equal to 255 characters",
      ],
    });

    expect({ validator, data: { userId: null } }).containsErrorMessages({
      userId: [
        "userId should not be empty",
        "userId must be a string",
        "userId must be shorter than or equal to 255 characters",
      ],
    });

    expect({ validator, data: { userId: "" } }).containsErrorMessages({
      userId: ["userId should not be empty"],
    });

    expect({ validator, data: { userId: 5 as any } }).containsErrorMessages({
      userId: [
        "userId must be a string",
        "userId must be shorter than or equal to 255 characters",
      ],
    });

    expect({
      validator,
      data: { userId: "t".repeat(256) },
    }).containsErrorMessages({
      userId: ["userId must be shorter than or equal to 255 characters"],
    });
  });

  test("invalidation cases for gender field", () => {
    expect({ validator, data: null }).containsErrorMessages({
      gender: [
        "gender should not be empty",
        "gender must be a string",
        "gender must be shorter than or equal to 6 characters",
      ],
    });

    expect({ validator, data: { gender: null } }).containsErrorMessages({
      gender: [
        "gender should not be empty",
        "gender must be a string",
        "gender must be shorter than or equal to 6 characters",
      ],
    });

    expect({ validator, data: { gender: "" } }).containsErrorMessages({
      gender: ["gender should not be empty"],
    });

    expect({ validator, data: { gender: 5 as any } }).containsErrorMessages({
      gender: [
        "gender must be a string",
        "gender must be shorter than or equal to 6 characters",
      ],
    });

    expect({
      validator,
      data: { gender: "t".repeat(256) },
    }).containsErrorMessages({
      gender: ["gender must be shorter than or equal to 6 characters"],
    });
  });

  test("invalidation cases for location field", () => {
    expect({ validator, data: null }).containsErrorMessages({
      location: ["location should not be empty", "location must be a string"],
    });

    expect({ validator, data: { location: null } }).containsErrorMessages({
      location: ["location should not be empty", "location must be a string"],
    });

    expect({ validator, data: { location: "" } }).containsErrorMessages({
      location: ["location should not be empty"],
    });

    expect({ validator, data: { location: 5 as any } }).containsErrorMessages({
      location: ["location must be a string"],
    });
  });

  test("invalidation cases for shareableSection field", () => {
    expect({
      validator,
      data: { shareableSection: 5 },
    }).containsErrorMessages({
      shareableSection: [
        "shareableSection must be a string",
        "shareableSection must be shorter than or equal to 255 characters",
      ],
    });

    expect({
      validator,
      data: { shareableSection: "some shareableSection".repeat(256) },
    }).containsErrorMessages({
      shareableSection: [
        "shareableSection must be shorter than or equal to 255 characters",
      ],
    });
  });

  test("invalidation cases for biography field", () => {
    expect({
      validator,
      data: { biography: 5 },
    }).containsErrorMessages({
      biography: [
        "biography must be a string",
        "biography must be shorter than or equal to 255 characters",
      ],
    });

    expect({
      validator,
      data: { biography: "some biography".repeat(256) },
    }).containsErrorMessages({
      biography: ["biography must be shorter than or equal to 255 characters"],
    });
  });

  test("invalidation cases for isOpenToWork field", () => {
    expect({ validator, data: { isOpenToWork: 5 } }).containsErrorMessages({
      isOpenToWork: ["isOpenToWork must be a boolean value"],
    });

    expect({ validator, data: { isOpenToWork: 0 } }).containsErrorMessages({
      isOpenToWork: ["isOpenToWork must be a boolean value"],
    });

    expect({ validator, data: { isOpenToWork: 1 } }).containsErrorMessages({
      isOpenToWork: ["isOpenToWork must be a boolean value"],
    });
  });

  test("invalidation cases for isFreelancer field", () => {
    expect({ validator, data: { isFreelancer: 5 } }).containsErrorMessages({
      isFreelancer: ["isFreelancer must be a boolean value"],
    });

    expect({ validator, data: { isFreelancer: 0 } }).containsErrorMessages({
      isFreelancer: ["isFreelancer must be a boolean value"],
    });

    expect({ validator, data: { isFreelancer: 1 } }).containsErrorMessages({
      isFreelancer: ["isFreelancer must be a boolean value"],
    });
  });

  describe("valid cases for fields", () => {
    type Arrange = {
      userId: string;
      gender: GenderType;
      biography?: string;
      location: string;
      shareableSection?: string;
      birthdate: Date;
      isOpenToWork?: boolean;
      isFreelancer?: boolean;
      image?: string;
    };
    const arrange: Arrange[] = [
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        location: "location",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: undefined,
        location: "location",
        shareableSection: undefined,
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        image: undefined,
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        location: "location",
        shareableSection: null,
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        image: null,
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        location: "location",
        shareableSection: null,
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: true,
        isFreelancer: true,
        image: null,
      },
    ];

    test.each(arrange)("validate %o", (item) => {
      const isValid = validator.validate(item);
      expect(isValid).toBeTruthy();
      expect(validator.validatedData).toStrictEqual(new PersonRules(item));
    });
  });
});
