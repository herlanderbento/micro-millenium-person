import { IEducationRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { EducationOutput } from '../common/education-output';
import { UpdateEducationInput } from './update-education.input';
export declare class UpdateEducationUseCase implements IUseCase<UpdateEducationInput, UpdateEducationOutput> {
    private educationRepository;
    constructor(educationRepository: IEducationRepository);
    execute(input: UpdateEducationInput): Promise<UpdateEducationOutput>;
}
export type UpdateEducationOutput = EducationOutput;
