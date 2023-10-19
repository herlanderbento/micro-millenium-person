"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidatorFactory = exports.EducationValidator = exports.EducationRules = void 0;
const class_validator_1 = require("class-validator");
const class_validator_fields_1 = __importDefault(require("../../../shared/domain/validators/class-validator-fields"));
class EducationRules {
    personId;
    title;
    educationType;
    institute;
    address;
    isCurrent;
    description;
    isVerified;
    createdAt;
    updatedAt;
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.EducationRules = EducationRules;
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], EducationRules.prototype, "personId", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EducationRules.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EducationRules.prototype, "educationType", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EducationRules.prototype, "institute", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EducationRules.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EducationRules.prototype, "isCurrent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EducationRules.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EducationRules.prototype, "isVerified", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], EducationRules.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], EducationRules.prototype, "updatedAt", void 0);
class EducationValidator extends class_validator_fields_1.default {
    validate(data) {
        return super.validate(new EducationRules(data ?? {}));
    }
}
exports.EducationValidator = EducationValidator;
class EducationValidatorFactory {
    static create() {
        return new EducationValidator();
    }
}
exports.EducationValidatorFactory = EducationValidatorFactory;
exports.default = EducationValidatorFactory;
