"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const value_object_1 = __importDefault(require("../value-object"));
class StubValueObject extends value_object_1.default {
}
describe("ValueObject unit tests", () => {
    it("should set value", () => {
        let obj = new StubValueObject("value object");
        expect(obj.value).toBe("value object");
        obj = new StubValueObject({ prop1: "value1" });
        expect(obj.value).toStrictEqual({ prop1: "value1" });
    });
    it("should convert to a string", () => {
        const date = new Date();
        let arrange = [
            { received: undefined, expected: "undefined" },
            { received: "", expected: "" },
            { received: "fake test", expected: "fake test" },
            { received: 0, expected: "0" },
            { received: 1, expected: "1" },
            { received: 5, expected: "5" },
            { received: true, expected: "true" },
            { received: false, expected: "false" },
            { received: date, expected: date.toString() },
            {
                received: { prop1: "value1" },
                expected: JSON.stringify({ prop1: "value1" }),
            },
        ];
        arrange.forEach((value) => {
            const valueObject = new StubValueObject(value.received);
            expect(valueObject + "").toBe(value.expected);
        });
    });
    it("should be a immutable object", () => {
        const obj = {
            prop1: "value1",
            deep: { prop2: "value2", prop3: new Date() },
        };
        const valueObject = new StubValueObject(obj);
        expect(() => {
            valueObject.value.prop1 = "test";
        }).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'");
        expect(() => {
            valueObject.value.deep.prop2 = "test";
        }).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'");
        expect(valueObject.value.deep.prop3).toBeInstanceOf(Date);
    });
});
