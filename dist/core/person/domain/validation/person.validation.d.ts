import { PersonProperties, GenderType } from "../entities/person.entity";
import ClassValidatorFields from "../../../shared/domain/validators/class-validator-fields";
export declare class PersonRules {
    userId: string;
    gender: GenderType | string;
    biography: string;
    address: string;
    isOpenToWork: boolean;
    isFreelancer: boolean;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: PersonProperties);
}
export declare class PersonValidator extends ClassValidatorFields<PersonRules> {
    validate(data: PersonProperties): boolean;
}
export declare class PersonValidatorFactory {
    static create(): PersonValidator;
}
export default PersonValidatorFactory;
