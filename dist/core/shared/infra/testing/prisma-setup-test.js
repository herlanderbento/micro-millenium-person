"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPrismaTests = void 0;
const node_child_process_1 = require("node:child_process");
function setupPrismaTests() {
    (0, node_child_process_1.execSync)('npx dotenv-cli -e .env.test -- npx prisma migrate deploy --schema prisma/schema.prisma');
}
exports.setupPrismaTests = setupPrismaTests;
