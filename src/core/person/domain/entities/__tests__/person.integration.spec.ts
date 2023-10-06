import { Person } from "../person.entity";

describe("Person Integration tests", () => {
  describe("create method", () => {
    it("should a invalid Person using userId property", () => {
      expect(
        () =>
           new Person({
            userId: null,
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        userId: [
          "userId should not be empty",
          "userId must be a string",
          "userId must be shorter than or equal to 255 characters",
        ],
      });

      expect(
        () =>
           new Person({
            userId: "",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        userId: ["userId should not be empty"],
      });

      expect(
        () =>
           new Person({
            userId: 5 as any,
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        userId: [
          "userId must be a string",
          "userId must be shorter than or equal to 255 characters",
        ],
      });

      expect(
        () =>
           new Person({
            userId: "h".repeat(256),
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        userId: ["userId must be shorter than or equal to 255 characters"],
      });
    });

    it("should a invalid Person using gender property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: null,
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        gender: [
          "gender should not be empty",
          "gender must be a string",
          "gender must be shorter than or equal to 6 characters",
        ],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        gender: ["gender should not be empty"],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: 5 as any,
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        gender: [
          "gender must be a string",
          "gender must be shorter than or equal to 6 characters",
        ],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male".repeat(256),
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        gender: ["gender must be shorter than or equal to 6 characters"],
      });
    });

    it("should a invalid Person using address property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: null,
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        address: ["address should not be empty", "address must be a string"],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        address: ["address should not be empty"],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: 22 as any,
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        address: ["address must be a string"],
      });
    });

    it("should a invalid Person using biography property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            biography: 5 as any,
          })
      ).containsErrorMessages({
        biography: [
          "biography must be a string",
          "biography must be shorter than or equal to 255 characters",
        ],
      });
    });

    it("should a invalid Person using shareableSection property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            shareableSection: 5 as any,
          })
      ).containsErrorMessages({
        shareableSection: [
          "shareableSection must be a string",
          "shareableSection must be shorter than or equal to 255 characters",
        ],
      });
    });

    it("should a invalid Person using avatar property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            avatar: 5 as any,
          })
      ).containsErrorMessages({
        avatar: ["avatar must be a string"],
      });
    });

    it("should a invalid Person using isOpenToWork property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: "" as any,
          })
      ).containsErrorMessages({
        isOpenToWork: ["isOpenToWork must be a boolean value"],
      });
    });

    it("should a invalid Person using isFreelancer property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isFreelancer: "" as any,
          })
      ).containsErrorMessages({
        isFreelancer: ["isFreelancer must be a boolean value"],
      });
    });

    it("should a valid Person", () => {
      expect.assertions(0);
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        address: "address",
        shareableSection: null,
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        avatar: null,
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: "some biography",
        address: "address",
        shareableSection: "some shareable sections",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        avatar: "some avatar",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: "some biography",
        address: "address",
        shareableSection: "some shareable sections",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: true,
        isFreelancer: true,
        avatar: "some avatar",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
  });

  describe("update method", () => {
    it("should a invalid Person using gender property", () => {
      const person =  new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: null,
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: [
          "gender should not be empty",
          "gender must be a string",
          "gender must be shorter than or equal to 6 characters",
        ],
      });

      expect(() =>
      person.update({
          gender: "",
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: ["gender should not be empty"],
      });

      expect(() =>
      person.update({
          gender: 5 as any,
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: [
          "gender must be a string",
          "gender must be shorter than or equal to 6 characters",
        ],
      });

      expect(() =>
      person.update({
          gender: "male".repeat(8),
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: ["gender must be shorter than or equal to 6 characters"],
      });
    });

    it("should a invalid Person using address property", () => {
      const person =  new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: "male",
          address: null,
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        address: ["address should not be empty", "address must be a string"],
      });

      expect(() =>
      person.update({
          gender: "male",
          address: "",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        address: ["address should not be empty"],
      });

      expect(() =>
      person.update({
          gender: "male",
          address: 5 as any,
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        address: ["address must be a string"],
      });
    });

    it("should a invalid Person using biography and shareableSection property", () => {
      const person =  new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        address: "address",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: "male",
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
          biography: "some biography",
          shareableSection: "some shareable section",
        })
      ).containsErrorMessages({
        biography: [
          "biography must be a string",
          "biography must be shorter than or equal to 255 characters",
        ],
        shareableSection: [
          "shareableSection must be a string",
          "shareableSection must be shorter than or equal to 255 characters",
        ],
      });
      expect(() =>
      person.update({
          gender: "male".repeat(8),
          address: "address",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
          biography: "some biography".repeat(256),
          shareableSection: "some shareable section".repeat(256),
        })
      ).containsErrorMessages({
        biography: [
          "biography must be shorter than or equal to 255 characters",
        ],
        shareableSection: [
          "shareableSection must be shorter than or equal to 255 characters",
        ],
      });
    });
  });
});
