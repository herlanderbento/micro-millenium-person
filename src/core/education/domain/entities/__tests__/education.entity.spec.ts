import { Education } from '../education.entity';

describe('Education unit tests', () => {
  let validateSpy: any;
  beforeEach(() => {
    validateSpy = jest.spyOn(Education, 'validate');
  });

  describe('constructor', () => {
    test('should create a education with default values', () => {
      const education = new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(education.id).toBeDefined();
      expect(education.address).toBeNull();
      expect(education.isCurrent).toBeFalsy();
      expect(education.isVerified).toBeFalsy();
      expect(education.endDate).toBeNull();
      expect(education.createdAt).toBeInstanceOf(Date);
      expect(education.updatedAt).toBeInstanceOf(Date);
    });

    test('should create a education with all values', () => {
      const education = new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        description: 'some description',
        address: 'some address',
        isCurrent: true,
        isVerified: true,
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        endDate: new Date('2023-10-15T09:29:58.242Z'),
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        address: 'some address',
        description: 'some description',
        isCurrent: true,
        isVerified: true,
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        endDate: new Date('2023-10-15T09:29:58.242Z'),
        createdAt: education.createdAt,
        updatedAt: education.updatedAt,
      });
      expect(education.id).toBeDefined();
    });
  });

  describe('create command', () => {
    test('should create a education with default values', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(education.id).toBeDefined();
      expect(education.address).toBeNull();
      expect(education.isCurrent).toBeFalsy();
      expect(education.isVerified).toBeFalsy();
      expect(education.endDate).toBeNull();
      expect(education.createdAt).toBeInstanceOf(Date);
      expect(education.updatedAt).toBeInstanceOf(Date);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should create a education with all values', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        address: 'some address',
        isCurrent: true,
        isVerified: true,
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        endDate: new Date('2023-10-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        address: 'some address',
        isCurrent: true,
        isVerified: true,
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        endDate: new Date('2023-10-15T09:29:58.242Z'),
        description: 'some description',
        createdAt: education.createdAt,
        updatedAt: education.updatedAt,
      });
      expect(education.id).toBeDefined();
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update command', () => {
    test('should update a education with default values', () => {
      const education = new Education({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });

      education.update({
        title: 'high school computer technician ',
        educationType: 'in person',
        institute: 'árvore da felicidade school',
        startDate: new Date('2018-02-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'high school computer technician ',
        educationType: 'in person',
        institute: 'árvore da felicidade school',
        startDate: new Date('2018-02-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education.id).toBeDefined();
      expect(education.address).toBeNull();
      expect(education.isCurrent).toBeFalsy();
      expect(education.isVerified).toBeFalsy();
      expect(education.endDate).toBeNull();
      expect(education.createdAt).toBeInstanceOf(Date);
      expect(education.updatedAt).toBeInstanceOf(Date);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should update a education with all values', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        address: 'some address',
        isCurrent: false,
        isVerified: true,
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        endDate: new Date('2023-10-15T09:29:58.242Z'),
        description: 'some description',
      });

      education.update({
        title: 'high school computer technician ',
        educationType: 'in person',
        institute: 'árvore da felicidade school',
        address: 'hoji-ya-henda, porto santos street',
        isCurrent: true,
        isVerified: false,
        startDate: new Date('2018-02-15T09:29:58.242Z'),
        endDate: new Date('2022-04-15T09:29:58.242Z'),
        description: 'some description',
      });

      expect(education).toMatchObject({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'high school computer technician ',
        educationType: 'in person',
        institute: 'árvore da felicidade school',
        address: 'hoji-ya-henda, porto santos street',
        isCurrent: true,
        isVerified: false,
        startDate: new Date('2018-02-15T09:29:58.242Z'),
        endDate: new Date('2022-04-15T09:29:58.242Z'),
        description: 'some description',
        createdAt: education.createdAt,
        updatedAt: education.updatedAt,
      });
      expect(education.id).toBeDefined();
      expect(validateSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('create method validation', () => {
    it('should a invalid education using personId property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        personId: [
          'personId should not be empty',
          'personId must be a string',
          'personId must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        personId: ['personId should not be empty'],
      });

      expect(() =>
        Education.create({
          personId: 5 as any,
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        personId: [
          'personId must be a string',
          'personId must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: 'personId'.repeat(256),
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        personId: ['personId must be shorter than or equal to 255 characters'],
      });
    });

    it('should a invalid education using title property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: [
          'title should not be empty',
          'title must be a string',
          'title must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: '',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: ['title should not be empty'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 5 as any,
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: [
          'title must be a string',
          'title must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education'.repeat(256),
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: ['title must be shorter than or equal to 255 characters'],
      });
    });

    it('should a invalid education using educationType property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType should not be empty',
          'educationType must be a string',
          'educationType must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: '',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: ['educationType should not be empty'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 5 as any,
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType must be a string',
          'educationType must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type'.repeat(256),
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType must be shorter than or equal to 255 characters',
        ],
      });
    });

    it('should a invalid education using institute property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute should not be empty',
          'institute must be a string',
          'institute must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: '',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: ['institute should not be empty'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 5 as any,
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute must be a string',
          'institute must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute'.repeat(256),
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute must be shorter than or equal to 255 characters',
        ],
      });
    });

    it('should a invalid education using description property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        description: [
          'description should not be empty',
          'description must be a string',
        ],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institution',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: '',
        })
      ).containsErrorMessages({
        description: ['description should not be empty'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 5 as any,
        })
      ).containsErrorMessages({
        description: ['description must be a string'],
      });
    });

    it('should a invalid education using address property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          address: 5 as any,
        })
      ).containsErrorMessages({
        address: ['address must be a string'],
      });
    });

    it('should a invalid education using isCurrent property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isCurrent: 5 as any,
        })
      ).containsErrorMessages({
        isCurrent: ['isCurrent must be a boolean value'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isCurrent: '' as any,
        })
      ).containsErrorMessages({
        isCurrent: ['isCurrent must be a boolean value'],
      });
    });

    it('should a invalid education using isVerified property', () => {
      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isVerified: 5 as any,
        })
      ).containsErrorMessages({
        isVerified: ['isVerified must be a boolean value'],
      });

      expect(() =>
        Education.create({
          personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isVerified: '' as any,
        })
      ).containsErrorMessages({
        isVerified: ['isVerified must be a boolean value'],
      });
    });
  });

  describe('update method validation', function () {
    it('should a invalid education using title property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(() =>
        education.update({
          title: null,
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: [
          'title should not be empty',
          'title must be a string',
          'title must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: '',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: ['title should not be empty'],
      });

      expect(() =>
        education.update({
          title: 5 as any,
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: [
          'title must be a string',
          'title must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: 'some title'.repeat(256),
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        title: ['title must be shorter than or equal to 255 characters'],
      });
    });

    it('should a invalid education using educationType property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(() =>
        education.update({
          title: 'some education',
          educationType: null,
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType should not be empty',
          'educationType must be a string',
          'educationType must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: 'some education',
          educationType: '',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: ['educationType should not be empty'],
      });

      expect(() =>
        education.update({
          title: 'title',
          educationType: 22 as any,
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType must be a string',
          'educationType must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some training type'.repeat(256),
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        educationType: [
          'educationType must be shorter than or equal to 255 characters',
        ],
      });
    });

    it('should a invalid education using institute property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(() =>
        education.update({
          title: 'some education',
          educationType: 'some training type',
          institute: null,
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute should not be empty',
          'institute must be a string',
          'institute must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: 'some education',
          educationType: 'some education type',
          institute: '',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: ['institute should not be empty'],
      });

      expect(() =>
        education.update({
          title: 'title',
          educationType: 'education Type',
          institute: 22 as any,
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute must be a string',
          'institute must be shorter than or equal to 255 characters',
        ],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some training type',
          institute: 'some institute'.repeat(256),
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
        })
      ).containsErrorMessages({
        institute: [
          'institute must be shorter than or equal to 255 characters',
        ],
      });
    });

    it('should a invalid education using description property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some education',
        educationType: 'some training type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
      });
      expect(() =>
        education.update({
          title: 'some education',
          educationType: 'some training type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: null,
        })
      ).containsErrorMessages({
        description: [
          'description should not be empty',
          'description must be a string',
        ],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institution',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: '',
        })
      ).containsErrorMessages({
        description: ['description should not be empty'],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 5 as any,
        })
      ).containsErrorMessages({
        description: ['description must be a string'],
      });
    });

    it('should a invalid education using address property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some title',
        educationType: 'some education type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
        address: 'nocal',
      });
      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          address: 5 as any,
        })
      ).containsErrorMessages({
        address: ['address must be a string'],
      });
    });

    it('should a invalid education using isCurrent property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some title',
        educationType: 'some education type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
        isCurrent: true,
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isCurrent: 5 as any,
        })
      ).containsErrorMessages({
        isCurrent: ['isCurrent must be a boolean value'],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isCurrent: '' as any,
        })
      ).containsErrorMessages({
        isCurrent: ['isCurrent must be a boolean value'],
      });
    });

    it('should a invalid education using isVerified property', () => {
      const education = Education.create({
        personId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        title: 'some title',
        educationType: 'some education type',
        institute: 'some institute',
        startDate: new Date('2023-07-15T09:29:58.242Z'),
        description: 'some description',
        isVerified: true,
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isVerified: 5 as any,
        })
      ).containsErrorMessages({
        isVerified: ['isVerified must be a boolean value'],
      });

      expect(() =>
        education.update({
          title: 'some title',
          educationType: 'some education type',
          institute: 'some institute',
          startDate: new Date('2023-07-15T09:29:58.242Z'),
          description: 'some description',
          isVerified: '' as any,
        })
      ).containsErrorMessages({
        isVerified: ['isVerified must be a boolean value'],
      });
    });
  });
});
