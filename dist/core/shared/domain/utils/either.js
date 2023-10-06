"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Either = void 0;
const EitherConstructor = Array;
class Either extends EitherConstructor {
    constructor(...p) {
        super(...p);
    }
    static ok(value) {
        return new Either(value, null);
    }
    static fail(error) {
        return new Either(null, error);
    }
    getOk() {
        return this[0];
    }
    getFail() {
        return this[1];
    }
    isOk() {
        return this[1] === null;
    }
    isFail() {
        return this[1] !== null;
    }
}
exports.Either = Either;
