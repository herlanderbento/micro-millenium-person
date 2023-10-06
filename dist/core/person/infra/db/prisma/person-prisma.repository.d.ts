import { Person, PersonId, IPersonRepository, PersonSearchParams, PersonSearchResult } from '../../../domain';
export declare class PersonPrismaRepository implements IPersonRepository {
    sortableFields: string[];
    create(entity: Person): Promise<void>;
    findById(id: string | PersonId): Promise<Person>;
    update(entity: Person): Promise<Person>;
    search(props: PersonSearchParams): Promise<PersonSearchResult>;
    findAll(): Promise<Person[]>;
    delete(id: string | PersonId): Promise<void>;
}
