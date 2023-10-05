import { GenderType, Person } from '../../../../domain';
import { PersonInMemoryRepository } from '../../../../infra';
import { NotFoundError } from '../../../../../@seedwork/domain';
import { UpdatePersonUseCase } from '../update-person.use-case';

describe('UpdatePersonUseCase Unit Tests', () => {
  let repository: PersonInMemoryRepository;
  let useCase: UpdatePersonUseCase;

  beforeEach(() => {
    repository = new PersonInMemoryRepository();
    useCase = new UpdatePersonUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
        gender: 'male',
        address: 'address',
        birthdate: new Date('2001-07-15T09:29:58.242Z'),
      })
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should Update a Person', async () => {
    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
    });
    repository.create(entity);

    let output = await useCase.execute({
      id: entity.id,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
      shareableSection: 'some shareable section',
    });
    expect(output).toMatchObject({
      id: entity.id,
      gender: 'male',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      biography: 'some biography',
      shareableSection: 'some shareable section',
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
        shareableSection?: string | null;
      };
      expected: {
        id: string;
        userId: string;
        gender: GenderType;
        address: string;
        birthdate: Date;
        biography?: string | null;
        shareableSection?: string | null;
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
          shareableSection: 'some shareable section',
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'male',
          address: 'address',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: 'some biography',
          shareableSection: 'some shareable section',
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
          shareableSection: '',
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: '',
          shareableSection: '',
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
          shareableSection: null,
        },
        expected: {
          id: entity.id,
          userId: entity.userId,
          gender: 'female',
          address: 'lisboa, portugal',
          birthdate: new Date('2001-07-15T09:29:58.242Z'),
          biography: null,
          shareableSection: null,
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
        shareableSection: item.input.shareableSection,
      });

      expect(output).toStrictEqual({
        id: entity.id,
        userId: entity.userId,
        gender: item.expected.gender,
        address: item.expected.address,
        birthdate: item.expected.birthdate,
        biography: item.expected.biography,
        shareableSection: item.expected.shareableSection,
        isOpenToWork: entity.isOpenToWork,
        isFreelancer: entity.isFreelancer,
        avatar: entity.avatar,
        createdAt: item.expected.createdAt,
        updatedAt: item.expected.updatedAt,
      });
    }
  });
});
