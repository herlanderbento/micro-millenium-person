import { IEducationRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { EducationOutput } from '../common';
import { IPersonRepository } from '../../../../person/domain';
import { CreateEducationInput } from './create-education.input';
export declare class CreateEducationUseCase implements IUseCase<CreateEducationInput, CreateEducationOutput> {
    private educationRepository;
    private personRepository;
    constructor(educationRepository: IEducationRepository, personRepository: IPersonRepository);
    execute(input: CreateEducationInput): Promise<CreateEducationOutput>;
}
export type CreateEducationOutput = EducationOutput;
