import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutput } from '../common';
import { UpdatePersonInput } from './update-person.input';
export declare class UpdatePersonUseCase implements IUseCase<UpdatePersonInput, UpdatePersonOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: UpdatePersonInput): Promise<UpdatePersonOutput>;
}
export type UpdatePersonOutput = PersonOutput;
