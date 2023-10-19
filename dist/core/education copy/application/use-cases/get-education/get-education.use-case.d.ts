import { IUseCase } from '../../../../shared/application';
import { IEducationRepository } from '../../../domain';
import { EducationOutput } from '../common';
export declare class GetEducationUseCase implements IUseCase<GetEducationInput, GetEducationOutput> {
    private educationRepository;
    constructor(educationRepository: IEducationRepository);
    execute(input: GetEducationInput): Promise<GetEducationOutput>;
}
export type GetEducationInput = {
    id: string;
};
export type GetEducationOutput = EducationOutput;
