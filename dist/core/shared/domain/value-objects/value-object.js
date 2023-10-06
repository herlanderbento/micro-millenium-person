"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const object_1 = require("../utils/object");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
class ValueObject {
    _value;
    constructor(value) {
        this._value = (0, object_1.deepFreeze)(value);
    }
    get value() {
        return this._value;
    }
    equals(obj) {
        if (obj === null || obj === undefined) {
            return false;
        }
        if (obj.value === undefined) {
            return false;
        }
        if (obj.constructor.name !== this.constructor.name) {
            return false;
        }
        return (0, isEqual_1.default)(this.value, obj.value);
    }
    toString = () => {
        if (typeof this.value !== "object" || this.value === null) {
            try {
                return this.value.toString();
            }
            catch (e) {
                return this.value + "";
            }
        }
        const valueStr = this.value.toString();
        return valueStr === "[object Object]"
            ? JSON.stringify(this.value)
            : valueStr;
    };
}
exports.ValueObject = ValueObject;
exports.default = ValueObject;
