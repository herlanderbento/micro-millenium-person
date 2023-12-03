import { Chance } from 'chance';
import { PersonFakeBuilder } from '../person-fake-builder';
import { Uuid } from '../../../../shared/domain';

describe('PersonFakeBuilder', () => {
  describe('entityId prop', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should throw error when any with methods has called', () => {
      expect(() => faker.entityId).toThrowError(
        new Error("Property entityId not have a factory, use 'with' methods")
      );
    });

    test('should be undefined', () => {
      expect(faker['_entityId']).toBeUndefined();
    });

    test('withUuid', () => {
      const entityId = new Uuid();
      const $this = faker.withUuid(entityId);
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_entityId']).toBe(entityId);

      faker.withUuid(() => entityId);
      expect(faker['_entityId']()).toBe(entityId);

      expect(faker.entityId).toBe(entityId);
    });

    test('should pass index to entityId factory', () => {
      let mockFactory = jest.fn(() => new Uuid());
      faker.withUuid(mockFactory);
      faker.build();
      expect(mockFactory).toHaveBeenCalledTimes(1);

      const personId = new Uuid();
      mockFactory = jest.fn(() => personId);
      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withUuid(mockFactory);
      fakerMany.build();

      expect(mockFactory).toHaveBeenCalledTimes(2);
      expect(fakerMany.build()[0].entityId).toBe(personId);
      expect(fakerMany.build()[1].entityId).toBe(personId);
    });
  });

  describe('userId props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_userId']).toBe('function');
    });

    test('should call the guid method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'guid');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withUserId', () => {
      const $this = faker.withUserId('670d7397-7cd6-4bba-b450-73ae6376048c');
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_userId']).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');

      faker.withUserId(() => '670d7397-7cd6-4bba-b450-73ae6376048c');
      //@ts-expect-error userId is callable
      expect(faker['_userId']()).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');

      expect(faker.userId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
    });

    test('should pass index to userId factory', () => {
      faker.withUserId(
        (index) => `670d7397-7cd6-4bba-b450-73ae6376048c ${index}`
      );
      const Person = faker.build();
      expect(Person.userId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 0`);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withUserId(
        (index) => `670d7397-7cd6-4bba-b450-73ae6376048c ${index}`
      );
      const Persons = fakerMany.build();

      expect(Persons[0].userId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 0`);
      expect(Persons[1].userId).toBe(`670d7397-7cd6-4bba-b450-73ae6376048c 1`);
    });

    test('invalid too long case', () => {
      const $this = faker.withInvalidUserIdTooLong();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_userId'].length).toBe(256);

      const tooLong = '6'.repeat(256);
      faker.withInvalidUserIdTooLong(tooLong);
      expect(faker['_userId'].length).toBe(256);
      expect(faker['_userId']).toBe(tooLong);
    });
  });

  describe('gender props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_gender']).toBe('function');
    });

    test('should call the word method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'word');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withGender', () => {
      const $this = faker.withGender('femele');
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_gender']).toBe('femele');

      faker.withGender(() => 'test gender');
      //@ts-expect-error gender is callable
      expect(faker['_gender']()).toBe('test gender');

      expect(faker.gender).toBe('test gender');
    });

    test('should pass index to gender factory', () => {
      faker.withGender((index) => `test gender ${index}`);
      const person = faker.build();
      expect(person.gender).toBe(`test gender 0`);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withGender((index) => `test gender ${index}`);
      const persons = fakerMany.build();

      expect(persons[0].gender).toBe(`test gender 0`);
      expect(persons[1].gender).toBe(`test gender 1`);
    });

    test('invalid too long case', () => {
      const $this = faker.withInvalidGenderTooLong();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_gender'].length).toBe(6);

      const tooLong = 'a'.repeat(6);
      faker.withInvalidGenderTooLong(tooLong);
      expect(faker['_gender'].length).toBe(6);
      expect(faker['_gender']).toBe(tooLong);
    });
  });

  describe('address props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_address']).toBe('function');
    });

    test('should call the word method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'word');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withAddress', () => {
      const $this = faker.withAddress('test address');
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_address']).toBe('test address');

      faker.withAddress(() => 'test address');
      //@ts-expect-error address is callable
      expect(faker['_address']()).toBe('test address');

      expect(faker.address).toBe('test address');
    });

    test('should pass index to address factory', () => {
      faker.withAddress((index) => `test address ${index}`);
      const person = faker.build();
      expect(person.address).toBe(`test address 0`);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withAddress((index) => `test address ${index}`);
      const persons = fakerMany.build();

      expect(persons[0].address).toBe(`test address 0`);
      expect(persons[1].address).toBe(`test address 1`);
    });
  });

  describe('birthdate props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_birthdate']).toBe('function');
    });

    test('should call the word method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'date');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withBirthdate', () => {
      const date = new Date();
      const $this = faker.withBirthdate(date);
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_birthdate']).toBe(date);

      faker.withBirthdate(() => date);
      //@ts-expect-error birthdate is callable
      expect(faker['_birthdate']()).toBe(date);

      expect(faker.birthdate).toBe(date);
    });

    test('should pass index to birthdate factory', () => {
      const date = new Date();
      faker.withBirthdate((index) => new Date(date.getTime() + index + 2));
      const person = faker.build();
      expect(person.birthdate.getTime()).toBe(date.getTime() + 2);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withBirthdate((index) => new Date(date.getTime() + index + 2));
      const persons = fakerMany.build();

      expect(persons[0].birthdate.getTime()).toBe(date.getTime() + 2);
      expect(persons[1].birthdate.getTime()).toBe(date.getTime() + 3);
    });
  });

  describe('biography props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_biography']).toBe('function');
    });

    test('should call the word method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'word');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withBiography', () => {
      const $this = faker.withBiography('test biography');
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_biography']).toBe('test biography');

      faker.withBiography(() => 'test biography');
      //@ts-expect-error biography is callable
      expect(faker['_biography']()).toBe('test biography');

      expect(faker.biography).toBe('test biography');
    });

    test('should pass index to biography factory', () => {
      faker.withBiography((index) => `test biography ${index}`);
      const person = faker.build();
      expect(person.biography).toBe(`test biography 0`);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withBiography((index) => `test biography ${index}`);
      const persons = fakerMany.build();

      expect(persons[0].biography).toBe(`test biography 0`);
      expect(persons[1].biography).toBe(`test biography 1`);
    });

    test('invalid too long case', () => {
      const $this = faker.withInvalidBiographyTooLong();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_biography'].length).toBe(256);

      const tooLong = 'a'.repeat(256);
      faker.withInvalidBiographyTooLong(tooLong);
      expect(faker['_biography'].length).toBe(256);
      expect(faker['_biography']).toBe(tooLong);
    });
  });

  describe('isOpenToWork prop', () => {
    const faker = PersonFakeBuilder.aPerson();
    test('should be a function', () => {
      expect(typeof faker['_isOpenToWork']).toBe('function');
    });

    test('activateForWork', () => {
      const $this = faker.activateForWork();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_isOpenToWork']).toBe(true);
      expect(faker.isOpenToWork).toBe(true);
    });

    test('deactivateForWork', () => {
      const $this = faker.deactivateForWork();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_isOpenToWork']).toBe(false);
      expect(faker.isOpenToWork).toBe(false);
    });
  });

  describe('isFreelancer prop', () => {
    const faker = PersonFakeBuilder.aPerson();
    test('should be a function', () => {
      expect(typeof faker['_isFreelancer']).toBe('function');
    });

    test('activateForFreelancer', () => {
      const $this = faker.activateForFreelancer();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_isFreelancer']).toBe(true);
      expect(faker.isFreelancer).toBe(true);
    });

    test('deactivateForFreelancer', () => {
      const $this = faker.deactivateForFreelancer();
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_isFreelancer']).toBe(false);
      expect(faker.isFreelancer).toBe(false);
    });
  });

  describe('avatar props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should be a function', () => {
      expect(typeof faker['_avatar']).toBe('function');
    });

    test('should call the word method', () => {
      const chance = Chance();
      const spyWordMethod = jest.spyOn(chance, 'avatar');
      faker['chance'] = chance;
      faker.build();

      expect(spyWordMethod).toHaveBeenCalled();
    });

    test('withAvatar', () => {
      const $this = faker.withAvatar('test avatar');
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_avatar']).toBe('test avatar');

      faker.withAvatar(() => 'test avatar');
      //@ts-expect-error avatar is callable
      expect(faker['_avatar']()).toBe('test avatar');

      expect(faker.avatar).toBe('test avatar');
    });

    test('should pass index to avatar factory', () => {
      faker.withAvatar((index) => `test avatar ${index}`);
      const person = faker.build();
      expect(person.avatar).toBe(`test avatar 0`);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withAvatar((index) => `test avatar ${index}`);
      const persons = fakerMany.build();

      expect(persons[0].avatar).toBe(`test avatar 0`);
      expect(persons[1].avatar).toBe(`test avatar 1`);
    });
  });

  describe('createdAt props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should throw error when any with methods has called', () => {
      const fakerperson = PersonFakeBuilder.aPerson();
      expect(() => fakerperson.createdAt).toThrowError(
        new Error("Property createdAt not have a factory, use 'with' methods")
      );
    });

    test('should be undefined', () => {
      expect(faker['_createdAt']).toBeUndefined();
    });

    test('should call the date method', () => {
      const chance = Chance();
      const spyDateMethod = jest.spyOn(chance, 'date');
      faker['chance'] = chance;
      faker.build();

      expect(spyDateMethod).toHaveBeenCalled();
    });

    test('withCreatedAt', () => {
      const date = new Date();
      const $this = faker.withCreatedAt(date);
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_createdAt']).toBe(date);

      faker.withCreatedAt(() => date);
      //@ts-expect-error startDate is callable
      expect(faker['_createdAt']()).toBe(date);

      expect(faker.createdAt).toBe(date);
    });

    test('should pass index to createdAt factory', () => {
      const date = new Date();
      faker.withCreatedAt((index) => new Date(date.getTime() + index + 2));
      const person = faker.build();
      expect(person.createdAt.getTime()).toBe(date.getTime() + 2);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withCreatedAt((index) => new Date(date.getTime() + index + 2));
      const persons = fakerMany.build();

      expect(persons[0].createdAt.getTime()).toBe(date.getTime() + 2);
      expect(persons[1].createdAt.getTime()).toBe(date.getTime() + 3);
    });
  });

  describe('updatedAt props', () => {
    const faker = PersonFakeBuilder.aPerson();

    test('should throw error when any with methods has called', () => {
      const fakerperson = PersonFakeBuilder.aPerson();
      expect(() => fakerperson.updatedAt).toThrowError(
        new Error("Property updatedAt not have a factory, use 'with' methods")
      );
    });

    test('should be undefined', () => {
      expect(faker['_updatedAt']).toBeUndefined();
    });

    test('should call the date method', () => {
      const chance = Chance();
      const spyDateMethod = jest.spyOn(chance, 'date');
      faker['chance'] = chance;
      faker.build();

      expect(spyDateMethod).toHaveBeenCalled();
    });

    test('withUpdatedAt', () => {
      const date = new Date();
      const $this = faker.withUpdatedAt(date);
      expect($this).toBeInstanceOf(PersonFakeBuilder);
      expect(faker['_updatedAt']).toBe(date);

      faker.withUpdatedAt(() => date);
      //@ts-expect-error startDate is callable
      expect(faker['_updatedAt']()).toBe(date);

      expect(faker.updatedAt).toBe(date);
    });

    test('should pass index to updatedAt factory', () => {
      const date = new Date();
      faker.withUpdatedAt((index) => new Date(date.getTime() + index + 2));
      const person = faker.build();
      expect(person.updatedAt.getTime()).toBe(date.getTime() + 2);

      const fakerMany = PersonFakeBuilder.thePersons(2);
      fakerMany.withUpdatedAt((index) => new Date(date.getTime() + index + 2));
      const persons = fakerMany.build();

      expect(persons[0].updatedAt.getTime()).toBe(date.getTime() + 2);
      expect(persons[1].updatedAt.getTime()).toBe(date.getTime() + 3);
    });
  });

  test('should create a person', () => {
    const faker = PersonFakeBuilder.aPerson();
    let person = faker.build();

    expect(person.entityId).toBeInstanceOf(Uuid);
    expect(typeof person.userId === 'string').toBeTruthy();
    expect(typeof person.gender === 'string').toBeTruthy();
    expect(typeof person.address === 'string').toBeTruthy();
    expect(person.birthdate).toBeInstanceOf(Date);
    expect(typeof person.biography === 'string').toBeTruthy();
    expect(typeof person.avatar === 'string').toBeTruthy();
    expect(person.isOpenToWork).toBe(true);
    expect(person.isFreelancer).toBe(true);
    expect(person.createdAt).toBeInstanceOf(Date);
    expect(person.updatedAt).toBeInstanceOf(Date);

    const createdAt = new Date();
    const updatedAt = new Date();
    const birthdate = new Date();
    const personId = new Uuid();

    person = faker
      .withUuid(personId)
      .withUserId('670d7397-7cd6-4bba-b450-73ae6376048c')
      .withGender('male')
      .withAddress('toronto')
      .withBirthdate(birthdate)
      .withBiography('some biography')
      .activateForWork()
      .activateForFreelancer()
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    expect(person.entityId.id).toBe(personId.id);
    expect(person.userId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
    expect(person.gender).toBe('male');
    expect(person.address).toBe('toronto');
    expect(person.birthdate).toBe(birthdate);
    expect(person.biography).toBe('some biography');
    expect(person.isOpenToWork).toBeTruthy();
    expect(person.isFreelancer).toBeTruthy();
    expect(person.createdAt).toBe(createdAt);
    expect(person.updatedAt).toBe(updatedAt);
  });

  test('should create many persons', () => {
    const faker = PersonFakeBuilder.thePersons(16);
    let persons = faker.build();

    persons.forEach((person) => {
      expect(person.entityId).toBeInstanceOf(Uuid);
      expect(typeof person.userId === 'string').toBeTruthy();
      expect(typeof person.gender === 'string').toBeTruthy();
      expect(typeof person.address === 'string').toBeTruthy();
      expect(person.birthdate).toBeInstanceOf(Date);
      expect(typeof person.biography === 'string').toBeTruthy();
      expect(typeof person.avatar === 'string').toBeTruthy();
      expect(person.isOpenToWork).toBe(true);
      expect(person.isFreelancer).toBe(true);
      expect(person.createdAt).toBeInstanceOf(Date);
      expect(person.updatedAt).toBeInstanceOf(Date);
    });

    const createdAt = new Date();
    const updatedAt = new Date();
    const birthdate = new Date();
    const personId = new Uuid();

    persons = faker
      .withUuid(personId)
      .withUserId('670d7397-7cd6-4bba-b450-73ae6376048c')
      .withGender('male')
      .withAddress('toronto')
      .withBirthdate(birthdate)
      .withBiography('some biography')
      .activateForWork()
      .activateForFreelancer()
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    persons.forEach((person) => {
      expect(person.entityId.id).toBe(personId.id);
      expect(person.userId).toBe('670d7397-7cd6-4bba-b450-73ae6376048c');
      expect(person.gender).toBe('male');
      expect(person.address).toBe('toronto');
      expect(person.birthdate).toBe(birthdate);
      expect(person.biography).toBe('some biography');
      expect(person.isOpenToWork).toBeTruthy();
      expect(person.isFreelancer).toBeTruthy();
      expect(person.createdAt).toBe(createdAt);
      expect(person.updatedAt).toBe(updatedAt);
    });
  });
});
