import { Education, EducationId, EducationSearchParams, EducationSearchResult, IEducationRepository } from '../../../domain';
export declare class EducationPrismaRepository implements IEducationRepository {
    sortableFields: string[];
    insert(entity: Education): Promise<void>;
    bulkInsert(entities: Education[]): Promise<void>;
    findById(id: string | EducationId): Promise<Education>;
    findAll(): Promise<Education[]>;
    update(entity: Education): Promise<Education>;
    search(props: EducationSearchParams): Promise<EducationSearchResult>;
    delete(id: string | EducationId): Promise<void>;
    protected _get(id: string): Promise<Education>;
}
