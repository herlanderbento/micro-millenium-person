"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("./either");
describe("Either Unit Tests", () => {
    it("should an Array instance", () => {
        const either = new either_1.Either(1, 2);
        expect(either).toBeInstanceOf(Array);
    });
    test("constructor", () => {
        const either = new either_1.Either(1, 2);
        expect(either[0]).toBe(1);
        expect(either[1]).toBe(2);
    });
    test("ok", () => {
        const either = either_1.Either.ok(1);
        expect(either[0]).toBe(1);
        expect(either[1]).toBeNull();
    });
    test("fail", () => {
        const error = new Error("test");
        const either = either_1.Either.fail(error);
        expect(either[0]).toBeNull();
        expect(either[1]).toEqual(error);
    });
    test("getOk", () => {
        const either = either_1.Either.ok(1);
        expect(either.getOk()).toBe(1);
    });
    test("getFail", () => {
        const error = new Error("test");
        const either = either_1.Either.fail(error);
        expect(either.getFail()).toEqual(error);
    });
    test("isOk", () => {
        const either = either_1.Either.ok(1);
        expect(either.isOk()).toBeTruthy();
        expect(either.isFail()).toBeFalsy();
    });
    test("isFail", () => {
        const error = new Error("test");
        const either = either_1.Either.fail(error);
        expect(either.isFail()).toBeTruthy();
        expect(either.isOk()).toBeFalsy();
    });
});
