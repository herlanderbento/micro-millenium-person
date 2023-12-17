import { FastifyRequest, FastifyReply } from 'fastify';
import { CreatePersonUseCase } from '../../../core/person/application';
export declare class CreatePersonController {
    private createPersonUseCase;
    constructor(createPersonUseCase: CreatePersonUseCase);
    handle(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
