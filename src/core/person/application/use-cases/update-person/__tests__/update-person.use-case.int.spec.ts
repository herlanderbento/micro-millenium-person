import { GenderType, Person } from '../../../../domain';
import { PersonPrismaRepository } from '../../../../infra';
import { NotFoundError } from '../../../../../shared/domain';
import { UpdatePersonUseCase } from '../update-person.use-case';
import { PrismaClient } from '@prisma/client';

describe('UpdatePersonUseCase Unit Tests', () => {
  let repository: PersonPrismaRepository;
  let useCase: UpdatePersonUseCase;
  const prismaService = new PrismaClient();

  beforeEach(() => {
    repository = new PersonPrismaRepository();
    useCase = new UpdatePersonUseCase(repository);
  });

  it('should throw error when entity not found', async () => {
    const input = {
      id: 'fake id',
      gender: String('male'),
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    };

    await expect(() => useCase.execute(input)).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID fake id`)
    );
  });

  it('should Update a Person', async () => {
    const entity = Person.fake().aPerson().build();
    await prismaService.person.create({ data: entity });

    let output = await useCase.execute({
      id: entity.id,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
    });

    expect(output).toMatchObject({
      id: entity.id,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });

    type Arrange = {
      input: {
        id: string;
        gender: GenderType;
        address: string;
        birthdate: Date;
        biography?: string | null;
      };
      expected: {
        id: string;
        userId: string;
        gender: GenderType;
        address: string;
        birthdate: Date;
        biography?: string | null;
        isOpenToWork?: boolean;
        isFreelancer?: boolean;
        avatar?: string;
        createdAt: Date;
        updatedAt: Date;
      };
    };

    const arrange: Arrange[] = [
      {
        input: {
          id: entity.id,
          gender: 'male',
          address: 'address',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: 'some biography',
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'male',
          address: 'address',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: 'some biography',
          isOpenToWork: entity.isOpenToWork,
          isFreelancer: entity.isFreelancer,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt,
        },
      },
      {
        input: {
          id: entity.id,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: '',
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: '',
          isOpenToWork: entity.isOpenToWork,
          isFreelancer: entity.isFreelancer,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt,
        },
      },
      {
        input: {
          id: entity.id,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: null,
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: null,
          isOpenToWork: entity.isOpenToWork,
          isFreelancer: entity.isFreelancer,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt,
        },
      },
    ];

    for (const item of arrange) {
      output = await useCase.execute({
        id: item.input.id,
        gender: item.input.gender,
        address: item.input.address,
        birthdate: item.input.birthdate,
        biography: item.input.biography,
      });

      expect(output).toStrictEqual({
        id: entity.id,
        userId: entity.userId,
        gender: item.expected.gender,
        address: item.expected.address,
        birthdate: item.expected.birthdate,
        biography: item.expected.biography,
        isOpenToWork: entity.isOpenToWork,
        isFreelancer: entity.isFreelancer,
        avatar: entity.avatar,
        createdAt: item.expected.createdAt,
        updatedAt: item.expected.updatedAt,
      });
    }
  });
});
