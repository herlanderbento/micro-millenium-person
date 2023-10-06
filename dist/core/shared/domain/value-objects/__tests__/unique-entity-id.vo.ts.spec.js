"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const unique_entity_id_vo_1 = __importDefault(require("../unique-entity-id.vo"));
const invalid_uuid_error_1 = __importDefault(require("../../errors/invalid-uuid.error"));
function spyValidateMethod() {
    return jest.spyOn(unique_entity_id_vo_1.default.prototype, "validate");
}
describe("UniqueEntityID Unit tests", () => {
    const validateSpy = spyValidateMethod();
    it("should throw error when uuid is invalid", () => {
        expect(() => new unique_entity_id_vo_1.default("fake id")).toThrow(new invalid_uuid_error_1.default());
        expect(validateSpy).toHaveBeenCalled();
    });
    it("should accept a uuid passed in constructor", () => {
        const uuid = "42f2da51-4b6d-4c29-b6d4-f255ed60fb96";
        const valueObject = new unique_entity_id_vo_1.default(uuid);
        expect(valueObject.id).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled();
    });
    it("should throw error when uuid is invalid", () => {
        const valueObject = new unique_entity_id_vo_1.default();
        expect((0, uuid_1.validate)(valueObject.value)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalled();
    });
});
