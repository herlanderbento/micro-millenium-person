import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonAllOutput } from '../common';
export declare class GetPersonUseCase implements IUseCase<GetPersonInput, Output> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: GetPersonInput): Promise<Output>;
}
export type GetPersonInput = {
    id: string;
};
export type Output = PersonAllOutput;
