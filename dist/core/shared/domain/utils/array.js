"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsIterable = void 0;
function checkIsIterable(value) {
    return typeof value[Symbol.iterator] === "function";
}
exports.checkIsIterable = checkIsIterable;
