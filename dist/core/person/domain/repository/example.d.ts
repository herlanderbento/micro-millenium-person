export interface IRepository<E> {
    insert(entity: E): Promise<void>;
    update(entity: E): Promise<void>;
    findAll(): Promise<E[]>;
    findById(id: string): Promise<E[]>;
    delete(id: string): Promise<void>;
}
