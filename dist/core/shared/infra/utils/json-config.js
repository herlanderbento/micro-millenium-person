"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = exports.convertToJSON = void 0;
function convertToJSON(data) {
    return JSON.stringify(data);
}
exports.convertToJSON = convertToJSON;
function parseJSON(data) {
    return JSON.parse(data);
}
exports.parseJSON = parseJSON;
