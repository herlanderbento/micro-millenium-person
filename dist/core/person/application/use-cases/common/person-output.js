"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonOutputMapper = void 0;
class PersonOutputMapper {
    static toOutput(entity) {
        return entity.toJSON();
    }
}
exports.PersonOutputMapper = PersonOutputMapper;
