"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const value_objects_1 = require("../value-objects");
const entity_1 = __importDefault(require("./entity"));
const uuid_1 = require("uuid");
class StubEntity extends entity_1.default {
    constructor(props, entityId) {
        super(props, entityId ?? new value_objects_1.Uuid());
    }
    toJSON() {
        return {
            id: this.id,
            prop1: this.props.prop1,
            prop2: this.props.prop2,
        };
    }
}
describe('Entity Unit Tests', () => {
    it('should set props and id', () => {
        const arrange = { prop1: 'prop1 value', prop2: 10 };
        const entity = new StubEntity(arrange);
        expect(entity.props).toStrictEqual(arrange);
        expect(entity.entityId).toBeInstanceOf(value_objects_1.Uuid);
        expect((0, uuid_1.validate)(entity.id)).toBeTruthy();
    });
    it('should accept a valid uuid', () => {
        const arrange = { prop1: 'prop1 value', prop2: 10 };
        const uuid = new value_objects_1.Uuid();
        const entity = new StubEntity(arrange, uuid);
        expect(entity.entityId).toBeInstanceOf(value_objects_1.Uuid);
        expect(entity.id).toBe(uuid.value);
    });
    it('should convert an entity to a JavaScript Object', () => {
        const arrange = { prop1: 'prop1 value', prop2: 10 };
        const uuid = new value_objects_1.Uuid();
        const entity = new StubEntity(arrange, uuid);
        expect(entity.toJSON()).toStrictEqual({
            id: entity.id,
            ...arrange,
        });
    });
});
