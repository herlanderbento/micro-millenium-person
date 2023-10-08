import { validate as uuidValidate } from "uuid";
import Uuid from "../uuid.vo";
import InvalidUuidError from "../../errors/invalid-uuid.error";

function spyValidateMethod() {
  return jest.spyOn(Uuid.prototype as any, "validate");
}

describe("Uuid Unit tests", () => {
  const validateSpy = spyValidateMethod();
  it("should throw error when uuid is invalid", () => {
    expect(() => new Uuid("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const uuid = "42f2da51-4b6d-4c29-b6d4-f255ed60fb96";
    const valueObject = new Uuid(uuid);
    expect(valueObject.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should throw error when uuid is invalid", () => {
    const valueObject = new Uuid();
    expect(uuidValidate(valueObject.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
