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

  test("invalidation cases for address field", () => {
    expect({ validator, data: null }).containsErrorMessages({
      address: ["address should not be empty", "address must be a string"],
    });

    expect({ validator, data: { address: null } }).containsErrorMessages({
      address: ["address should not be empty", "address must be a string"],
    });

    expect({ validator, data: { address: "" } }).containsErrorMessages({
      address: ["address should not be empty"],
    });

    expect({ validator, data: { address: 5 as any } }).containsErrorMessages({
      address: ["address must be a string"],
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
      address: string;
      birthdate: Date;
      isOpenToWork?: boolean;
      isFreelancer?: boolean;
      avatar?: string;
    };
    const arrange: Arrange[] = [
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: undefined,
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        avatar: undefined,
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        avatar: null,
      },
      {
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: true,
        isFreelancer: true,
        avatar: null,
      },
    ];

    test.each(arrange)("validate %o", (item) => {
      const isValid = validator.validate(item);
      expect(isValid).toBeTruthy();
      expect(validator.validatedData).toStrictEqual(new PersonRules(item));
    });
  });
});
