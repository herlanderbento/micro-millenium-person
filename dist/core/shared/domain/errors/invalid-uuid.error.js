"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUuidError = void 0;
class InvalidUuidError extends Error {
    constructor(message) {
        super(message || "Id must be a valid UUID");
        this.name = "InvalidUuidError";
    }
}
exports.InvalidUuidError = InvalidUuidError;
exports.default = InvalidUuidError;
