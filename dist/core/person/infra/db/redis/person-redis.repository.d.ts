import { IPersonRepository, Person } from "../../../domain";
export declare class PersonRedisRepository implements Pick<IPersonRepository, "findAll"> {
    findAll(): Promise<Person[]>;
}
