"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const education_validation_1 = __importDefault(require("./education.validation"));
describe("EducationValidator Tests", () => {
    let validator;
    beforeEach(() => (validator = education_validation_1.default.create()));
    test("invalidation cases for personId field", () => {
        expect({ validator, data: null }).containsErrorMessages({
            personId: [
                "personId should not be empty",
                "personId must be a string",
                "personId must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { personId: null } }).containsErrorMessages({
            personId: [
                "personId should not be empty",
                "personId must be a string",
                "personId must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { personId: "" } }).containsErrorMessages({
            personId: ["personId should not be empty"],
        });
        expect({ validator, data: { personId: 5 } }).containsErrorMessages({
            personId: [
                "personId must be a string",
                "personId must be shorter than or equal to 255 characters",
            ],
        });
        expect({
            validator,
            data: { personId: "t".repeat(256) },
        }).containsErrorMessages({
            personId: ["personId must be shorter than or equal to 255 characters"],
        });
    });
    test("invalidation cases for title field", () => {
        expect({ validator, data: null }).containsErrorMessages({
            title: [
                "title should not be empty",
                "title must be a string",
                "title must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { title: null } }).containsErrorMessages({
            title: [
                "title should not be empty",
                "title must be a string",
                "title must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { title: "" } }).containsErrorMessages({
            title: ["title should not be empty"],
        });
        expect({ validator, data: { title: 5 } }).containsErrorMessages({
            title: [
                "title must be a string",
                "title must be shorter than or equal to 255 characters",
            ],
        });
        expect({
            validator,
            data: { title: "t".repeat(256) },
        }).containsErrorMessages({
            title: ["title must be shorter than or equal to 255 characters"],
        });
    });
    test("invalidation cases for educationType field", () => {
        expect({ validator, data: null }).containsErrorMessages({
            educationType: [
                "educationType should not be empty",
                "educationType must be a string",
                "educationType must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { educationType: null } }).containsErrorMessages({
            educationType: [
                "educationType should not be empty",
                "educationType must be a string",
                "educationType must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { educationType: "" } }).containsErrorMessages({
            educationType: ["educationType should not be empty"],
        });
        expect({
            validator,
            data: { educationType: 5 },
        }).containsErrorMessages({
            educationType: [
                "educationType must be a string",
                "educationType must be shorter than or equal to 255 characters",
            ],
        });
        expect({
            validator,
            data: { educationType: "t".repeat(256) },
        }).containsErrorMessages({
            educationType: [
                "educationType must be shorter than or equal to 255 characters",
            ],
        });
    });
    test("invalidation cases for institute field", () => {
        expect({ validator, data: null }).containsErrorMessages({
            institute: [
                "institute should not be empty",
                "institute must be a string",
                "institute must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { institute: null } }).containsErrorMessages({
            institute: [
                "institute should not be empty",
                "institute must be a string",
                "institute must be shorter than or equal to 255 characters",
            ],
        });
        expect({ validator, data: { institute: "" } }).containsErrorMessages({
            institute: ["institute should not be empty"],
        });
        expect({
            validator,
            data: { institute: 5 },
        }).containsErrorMessages({
            institute: [
                "institute must be a string",
                "institute must be shorter than or equal to 255 characters",
            ],
        });
        expect({
            validator,
            data: { institute: "t".repeat(256) },
        }).containsErrorMessages({
            institute: ["institute must be shorter than or equal to 255 characters"],
        });
    });
    test("invalidation cases for description field", () => {
        expect({ validator, data: null }).containsErrorMessages({
            description: [
                "description should not be empty",
                "description must be a string",
            ],
        });
        expect({ validator, data: { description: null } }).containsErrorMessages({
            description: [
                "description should not be empty",
                "description must be a string",
            ],
        });
        expect({ validator, data: { description: "" } }).containsErrorMessages({
            description: ["description should not be empty"],
        });
        expect({
            validator,
            data: { description: 5 },
        }).containsErrorMessages({
            description: ["description must be a string"],
        });
    });
    test("invalidation cases for address field", () => {
        expect({
            validator,
            data: { address: 5 },
        }).containsErrorMessages({
            address: ["address must be a string"],
        });
    });
    test("invalidation cases for isCurrent field", () => {
        expect({ validator, data: { isCurrent: 5 } }).containsErrorMessages({
            isCurrent: ["isCurrent must be a boolean value"],
        });
        expect({ validator, data: { isCurrent: 0 } }).containsErrorMessages({
            isCurrent: ["isCurrent must be a boolean value"],
        });
        expect({ validator, data: { isCurrent: 1 } }).containsErrorMessages({
            isCurrent: ["isCurrent must be a boolean value"],
        });
    });
    test("invalidation cases for isVerified field", () => {
        expect({ validator, data: { isVerified: 5 } }).containsErrorMessages({
            isVerified: ["isVerified must be a boolean value"],
        });
        expect({ validator, data: { isVerified: "" } }).containsErrorMessages({
            isVerified: ["isVerified must be a boolean value"],
        });
        expect({ validator, data: { isVerified: 1 } }).containsErrorMessages({
            isVerified: ["isVerified must be a boolean value"],
        });
    });
});
