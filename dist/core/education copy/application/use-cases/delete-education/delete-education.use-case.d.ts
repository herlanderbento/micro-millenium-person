import { IUseCase } from '../../../../shared/application';
import { IEducationRepository } from '../../../domain';
export declare class DeleteEducationUseCase implements IUseCase<DeleteEducationInput, DeleteEducationOutput> {
    private educationRepository;
    constructor(educationRepository: IEducationRepository);
    execute(input: DeleteEducationInput): Promise<DeleteEducationOutput>;
}
export type DeleteEducationInput = {
    id: string;
};
export type DeleteEducationOutput = void;
