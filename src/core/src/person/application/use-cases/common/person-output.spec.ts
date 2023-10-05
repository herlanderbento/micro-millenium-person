import { Person } from '../../../domain';
import { PersonOutputMapper } from './person-output';

describe('PersonOutputMapper', () => {
  it('should convert a mira in output', () => {
    const createdAt = new Date();
    const updatedAt = new Date();
    const entity = new Person({
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      shareableSection: 'some shareable sections',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    });

    const spyToJSON = jest.spyOn(entity, 'toJSON');
    const output = PersonOutputMapper.toOutput(entity);
    expect(spyToJSON).toHaveBeenCalled();
    expect(output).toStrictEqual({
      id: entity.id,
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      gender: 'male',
      biography: 'some biography',
      address: 'address',
      shareableSection: 'some shareable sections',
      birthdate: new Date('2001-07-15T09:29:58.242Z'),
      isOpenToWork: false,
      isFreelancer: false,
      avatar: 'some avatar',
      createdAt,
      updatedAt,
    });
  });
});
