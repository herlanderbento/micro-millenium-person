import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
export declare class DeletePersonUseCase implements IUseCase<DeletePersonInput, DeletePersonOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: DeletePersonInput): Promise<DeletePersonOutput>;
}
export type DeletePersonInput = {
    id: string;
};
export type DeletePersonOutput = void;
