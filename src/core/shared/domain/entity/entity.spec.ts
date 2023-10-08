import { Uuid } from '../value-objects';
import Entity from './entity';
import { validate as uuidValidate } from 'uuid';

class StubEntity extends Entity<Uuid, { prop1: string; prop2: number }> {
  constructor(props: { prop1: string; prop2: number }, entityId?: Uuid) {
    super(props, entityId ?? new Uuid());
  }

  toJSON(): Required<{ id: string } & { prop1: string; prop2: number }> {
    return {
      id: this.id,
      prop1: this.props.prop1,
      prop2: this.props.prop2,
    };
  }
}

describe('Entity Unit Tests', () => {
  it('should set props and id', () => {
    const arrange = { prop1: 'prop1 value', prop2: 10 };
    const entity = new StubEntity(arrange);
    expect(entity.props).toStrictEqual(arrange);
    expect(entity.entityId).toBeInstanceOf(Uuid);
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('should accept a valid uuid', () => {
    const arrange = { prop1: 'prop1 value', prop2: 10 };
    const uuid = new Uuid();
    const entity = new StubEntity(arrange, uuid);
    expect(entity.entityId).toBeInstanceOf(Uuid)
    expect(entity.id).toBe(uuid.value);
  });

  it('should convert an entity to a JavaScript Object', () => {
    const arrange = { prop1: 'prop1 value', prop2: 10 };
    const uuid = new Uuid();
    const entity = new StubEntity(arrange, uuid);
    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...arrange,
    });
  });
});
