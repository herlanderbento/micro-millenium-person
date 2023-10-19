import { EducationProperties } from "../entities/education.entity";
import ClassValidatorFields from "../../../shared/domain/validators/class-validator-fields";
import { PersonId } from "../../../person/domain";
export declare class EducationRules {
    personId: PersonId | string;
    title: string;
    educationType: string;
    institute: string;
    address: string;
    isCurrent: boolean;
    description: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: EducationProperties);
}
export declare class EducationValidator extends ClassValidatorFields<EducationRules> {
    validate(data: EducationProperties): boolean;
}
export declare class EducationValidatorFactory {
    static create(): EducationValidator;
}
export default EducationValidatorFactory;
