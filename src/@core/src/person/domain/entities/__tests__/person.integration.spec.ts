import { Person } from "../person.entity";

describe("Person Integration tests", () => {
  describe("create method", () => {
    it("should a invalid Person using userId property", () => {
      expect(
        () =>
           new Person({
            userId: null,
            gender: "male",
            location: "location",
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
            location: "location",
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
            location: "location",
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
            location: "location",
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
            location: "location",
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
            location: "location",
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
            location: "location",
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
            location: "location",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        gender: ["gender must be shorter than or equal to 6 characters"],
      });
    });

    it("should a invalid Person using location property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: null,
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        location: ["location should not be empty", "location must be a string"],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: "",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        location: ["location should not be empty"],
      });

      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: 22 as any,
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
          })
      ).containsErrorMessages({
        location: ["location must be a string"],
      });
    });

    it("should a invalid Person using biography property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: "location",
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
            location: "location",
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

    it("should a invalid Person using image property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: "location",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            image: 5 as any,
          })
      ).containsErrorMessages({
        image: ["image must be a string"],
      });
    });

    it("should a invalid Person using isOpenToWork property", () => {
      expect(
        () =>
           new Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            location: "location",
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
            location: "location",
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
        location: "location",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: null,
        location: "location",
        shareableSection: null,
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        image: null,
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: "some biography",
        location: "location",
        shareableSection: "some shareable sections",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: false,
        isFreelancer: false,
        image: "some image",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
       new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        biography: "some biography",
        location: "location",
        shareableSection: "some shareable sections",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
        isOpenToWork: true,
        isFreelancer: true,
        image: "some image",
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
        location: "location",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: null,
          location: "location",
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
          location: "location",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: ["gender should not be empty"],
      });

      expect(() =>
      person.update({
          gender: 5 as any,
          location: "location",
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
          location: "location",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        gender: ["gender must be shorter than or equal to 6 characters"],
      });
    });

    it("should a invalid Person using location property", () => {
      const person =  new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        location: "location",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: "male",
          location: null,
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        location: ["location should not be empty", "location must be a string"],
      });

      expect(() =>
      person.update({
          gender: "male",
          location: "",
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        location: ["location should not be empty"],
      });

      expect(() =>
      person.update({
          gender: "male",
          location: 5 as any,
          birthdate: new Date("2001-07-15T09:29:58.242Z"),
        })
      ).containsErrorMessages({
        location: ["location must be a string"],
      });
    });

    it("should a invalid Person using biography and shareableSection property", () => {
      const person =  new Person({
        userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        gender: "male",
        location: "location",
        birthdate: new Date("2001-07-15T09:29:58.242Z"),
      });
      expect(() =>
      person.update({
          gender: "male",
          location: "location",
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
          location: "location",
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
