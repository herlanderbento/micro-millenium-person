"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const person_entity_1 = require("../person.entity");
describe("Person unit tests", () => {
    beforeEach(() => {
        person_entity_1.Person.validate = jest.fn();
    });
    test("Constructor of Person", () => {
        person_entity_1.Person.validate = jest.fn();
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        let props = (0, lodash_1.omit)(person.props, "createdAt", "updatedAt");
        expect(props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: null,
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: true,
            isFreelancer: true,
            avatar: null,
        });
        expect(person.props.createdAt).toBeInstanceOf(Date);
        expect(person.props.updatedAt).toBeInstanceOf(Date);
        let createdAt = new Date();
        let updatedAt = new Date();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "some biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: "some avatar",
            createdAt,
            updatedAt,
        });
        expect(person.props).toStrictEqual({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "some biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: "some avatar",
            createdAt,
            updatedAt,
        });
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "other biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "other biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            avatar: "other avatar",
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            avatar: "other avatar",
        });
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: true,
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: true,
        });
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isFreelancer: true,
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isFreelancer: true,
        });
        createdAt = new Date();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            createdAt,
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            createdAt,
        });
        updatedAt = new Date();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            updatedAt,
        });
        expect(person.props).toMatchObject({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            updatedAt,
        });
    });
    test("id field", () => {
        const data = [
            {
                props: {
                    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    gender: "male",
                    address: "address",
                    birthdate: new Date("2001-07-15T09:29:58.242Z"),
                },
            },
            {
                props: {
                    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    gender: "male",
                    address: "address",
                    birthdate: new Date("2001-07-15T09:29:58.242Z"),
                },
                id: null,
            },
            {
                props: {
                    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    gender: "male",
                    address: "address",
                    birthdate: new Date("2001-07-15T09:29:58.242Z"),
                },
                id: undefined,
            },
            {
                props: {
                    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    gender: "male",
                    address: "address",
                    birthdate: new Date("2001-07-15T09:29:58.242Z"),
                },
                id: new person_entity_1.PersonId(),
            },
        ];
        data.forEach((item) => {
            const person = new person_entity_1.Person(item.props, item.id);
            expect(person.id).not.toBeNull();
            expect(person.entityId).toBeInstanceOf(person_entity_1.PersonId);
        });
    });
    test("getter and setter of userId field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.userId).toBe("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d");
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        person["userId"] = "27674624-b3a6-460c-af8c-14419a056792";
        expect(person.userId).toBe("27674624-b3a6-460c-af8c-14419a056792");
    });
    test("getter and setter of gender field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.gender).toBe("male");
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        person["gender"] = "female";
        expect(person.gender).toBe("female");
    });
    test("getter and setter of address field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "angola, luanda",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.address).toStrictEqual("angola, luanda");
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "canada, toronto",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        person["address"] = "canada, toronto";
        expect(person.address).toBe("canada, toronto");
    });
    test("getter and setter of birthdate field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        expect(person.birthdate).toStrictEqual(new Date("2001-07-15T09:29:58.242Z"));
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        person["birthdate"] = new Date("2001-07-15T09:29:58.242Z");
        expect(person.birthdate).toStrictEqual(new Date("2001-07-15T09:29:58.242Z"));
    });
    test("getter and setter of biography field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.biography).toBeNull();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            biography: "some biography",
        });
        expect(person.biography).toBe("some biography");
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        person["biography"] = "other biography";
        expect(person.biography).toBe("other biography");
        person["biography"] = undefined;
        expect(person.biography).toBeNull();
        person["biography"] = null;
        expect(person.biography).toBeNull();
    });
    test("getter and setter of avatar field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.avatar).toBeNull();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            avatar: "some avatar",
        });
        expect(person.avatar).toBe("some avatar");
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        person["avatar"] = "other avatar";
        expect(person.avatar).toBe("other avatar");
        person["avatar"] = undefined;
        expect(person.avatar).toBeNull();
        person["avatar"] = null;
        expect(person.avatar).toBeNull();
    });
    test("getter and setter of isOpenToWork field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.isOpenToWork).toBeTruthy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isOpenToWork: true,
        });
        expect(person.isOpenToWork).toBeTruthy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isOpenToWork: false,
        });
        expect(person.isOpenToWork).toBeFalsy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        person["isOpenToWork"] = false;
        expect(person.isOpenToWork).toBeFalsy();
        person["isOpenToWork"] = true;
        expect(person.isOpenToWork).toBeTruthy();
    });
    test("getter and setter of isFreelancer field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.isFreelancer).toBeTruthy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isFreelancer: true,
        });
        expect(person.isFreelancer).toBeTruthy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isFreelancer: false,
        });
        expect(person.isFreelancer).toBeFalsy();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        person["isFreelancer"] = false;
        expect(person.isFreelancer).toBeFalsy();
        person["isFreelancer"] = true;
        expect(person.isFreelancer).toBeTruthy();
    });
    test("getter of createdAt field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.createdAt).toBeInstanceOf(Date);
        let createdAt = new Date();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            createdAt,
        });
        expect(person.createdAt).toBe(createdAt);
    });
    test("getter of updatedAt field", () => {
        let person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        expect(person.updatedAt).toBeInstanceOf(Date);
        let updatedAt = new Date();
        person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "address",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            updatedAt,
        });
        expect(person.updatedAt).toBe(updatedAt);
    });
    it("should update a person", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "luanda",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
        });
        const input = {
            gender: "male",
            address: "toronto",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            biography: "some biography",
        };
        person.update(input);
        expect(person.gender).toBe("male");
        expect(person.address).toBe("toronto");
        expect(person.birthdate).toStrictEqual(new Date("2001-07-15T09:29:58.242Z"));
        expect(person.biography).toStrictEqual("some biography");
    });
    it("should update avatar person", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "toronto",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
        });
        const input = {
            avatar: "some avatar",
        };
        person.update(input);
        expect(person.gender).toBe("male");
        expect(person.address).toBe("toronto");
        expect(person.birthdate).toStrictEqual(new Date("2001-07-15T09:29:58.242Z"));
        expect(person.avatar).toStrictEqual("some avatar");
    });
    test("should active a person open to work", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "luanda",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isOpenToWork: false,
        });
        person.activateForWork();
        expect(person.isOpenToWork).toBeTruthy();
    });
    test("should disable a person open to work", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "luanda",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isOpenToWork: true,
        });
        person.deactivateForWork();
        expect(person.isOpenToWork).toBeFalsy();
    });
    test("should active a person freelancer", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "luanda",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isFreelancer: false,
        });
        person.activateForFreelancer();
        expect(person.isFreelancer).toBeTruthy();
    });
    test("should disable a person freelancer", () => {
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            address: "luanda",
            birthdate: new Date("2002-07-15T09:29:58.242Z"),
            isFreelancer: true,
        });
        person.deactivateForFreelancer();
        expect(person.isFreelancer).toBeFalsy();
    });
    test("method toJSON", () => {
        const createdAt = new Date();
        const updatedAt = new Date();
        const person = new person_entity_1.Person({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "some biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: "some avatar",
            createdAt,
            updatedAt,
        });
        expect(person.toJSON()).toStrictEqual({
            userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            gender: "male",
            biography: "some biography",
            address: "address",
            birthdate: new Date("2001-07-15T09:29:58.242Z"),
            isOpenToWork: false,
            isFreelancer: false,
            avatar: "some avatar",
            createdAt,
            updatedAt,
            id: person.id,
        });
    });
});
