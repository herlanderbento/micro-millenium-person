import { Person } from '../../../../domain';
import { PersonPrismaMapper } from '../person-prisma.mapper';

describe('PersonPrismaMapper', () => {
  test('should mapper entity to model', () => {
    const createdAt = new Date();
    const updatedAt = new Date();

    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    });

    const model = PersonPrismaMapper.toModel(entity);
    expect(model).toStrictEqual({
      id: model.id,
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    });
  });

  test('should mapper model to entity', () => {
    const createdAt = new Date();
    const updatedAt = new Date();

    const model = {
      id: '46f61619-ea05-4adf-aa5e-9844aded12fc',
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    };

    const entity = PersonPrismaMapper.toEntity(model);
    
    expect(entity.id).toBe('46f61619-ea05-4adf-aa5e-9844aded12fc');
    expect(entity).toMatchObject({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    });
  });
});
