"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEntityError = void 0;
class LoadEntityError extends Error {
    error;
    constructor(error, message) {
        super(message ?? 'An entity not be loaded');
        this.error = error;
        this.name = 'LoadEntityError';
    }
}
exports.LoadEntityError = LoadEntityError;
exports.default = LoadEntityError;
