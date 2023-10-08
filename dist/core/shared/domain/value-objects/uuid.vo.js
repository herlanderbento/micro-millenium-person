"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const value_object_1 = __importDefault(require("./value-object"));
const invalid_uuid_error_1 = __importDefault(require("../errors/invalid-uuid.error"));
class Uuid extends value_object_1.default {
    id;
    constructor(id) {
        super(id || (0, uuid_1.v4)());
        this.id = id;
        this.validate();
    }
    validate() {
        const isValid = (0, uuid_1.validate)(this.value);
        if (!isValid) {
            throw new invalid_uuid_error_1.default();
        }
    }
}
exports.Uuid = Uuid;
exports.default = Uuid;
