"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatarUrl = void 0;
class avatarUrl {
    static create(avatarUrl) {
        if (!process.env.NODE_ENV_API_URL) {
            throw new Error("NODE_ENV_API_URL environment variable is not set");
        }
        return `${process.env.NODE_ENV_API_URL}/profile/${avatarUrl}`;
    }
}
exports.avatarUrl = avatarUrl;
