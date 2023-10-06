"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unique_entity_id_vo_1 = __importDefault(require("../value-objects/unique-entity-id.vo"));
const entity_1 = __importDefault(require("./entity"));
const uuid_1 = require("uuid");
class StubEntity extends entity_1.default {
    constructor(props, entityId) {
        super(props, entityId ?? new unique_entity_id_vo_1.default());
    }
    toJSON() {
        return {
            id: this.id,
            prop1: this.props.prop1,
            prop2: this.props.prop2,
        };
    }
}
describe("Entity Unit Tests", () => {
    it("should set props and id", () => {
        const arrange = { prop1: "prop1 value", prop2: 10 };
        const entity = new StubEntity(arrange);
        expect(entity.props).toStrictEqual(arrange);
        expect(entity.entityId).toBeInstanceOf(unique_entity_id_vo_1.default);
        expect((0, uuid_1.validate)(entity.id)).toBeTruthy();
    });
    it("should accept a valid uuid", () => {
        const arrange = { prop1: "prop1 value", prop2: 10 };
        const uniqueEntityId = new unique_entity_id_vo_1.default();
        const entity = new StubEntity(arrange, uniqueEntityId);
        expect(entity.entityId).toBeInstanceOf(unique_entity_id_vo_1.default);
        expect(entity.id).toBe(uniqueEntityId.value);
    });
    it("should convert an entity to a JavaScript Object", () => {
        const arrange = { prop1: "prop1 value", prop2: 10 };
        const uniqueEntityId = new unique_entity_id_vo_1.default();
        const entity = new StubEntity(arrange, uniqueEntityId);
        expect(entity.toJSON()).toStrictEqual({
            id: entity.id,
            ...arrange,
        });
    });
});
