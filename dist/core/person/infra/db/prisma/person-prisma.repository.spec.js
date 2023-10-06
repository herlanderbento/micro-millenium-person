"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const person_prisma_repository_1 = require("./person-prisma.repository");
describe("PersonPrismaRepository", () => {
    const prismaClient = new client_1.PrismaClient();
    let repository;
    beforeEach(async () => {
        repository = new person_prisma_repository_1.PersonPrismaRepository();
    });
    it("should create a mira", async () => {
    });
    it("should throw error on update when a entity not found", async () => {
    });
});
