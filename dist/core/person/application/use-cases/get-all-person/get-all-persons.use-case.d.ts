import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutput } from '../common';
export declare class GetAllPersonsUseCase implements IUseCase<GetAllPersonInput, GetAllPersonOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(): Promise<GetAllPersonOutput>;
}
export type GetAllPersonInput = void;
export type GetAllPersonOutput = PersonOutput[];
