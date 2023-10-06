import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutput } from '../common';
import { CreatePersonInput } from './create-person.input';
export declare class CreatePersonUseCase implements IUseCase<CreatePersonInput, CreatePersonOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: CreatePersonInput): Promise<CreatePersonOutput>;
}
export type CreatePersonOutput = PersonOutput;
