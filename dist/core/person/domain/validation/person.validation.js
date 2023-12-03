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
exports.PersonValidatorFactory = exports.PersonValidator = exports.PersonRules = void 0;
const class_validator_1 = require("class-validator");
const class_validator_fields_1 = __importDefault(require("../../../shared/domain/validators/class-validator-fields"));
class PersonRules {
    userId;
    gender;
    biography;
    address;
    isOpenToWork;
    isFreelancer;
    avatar;
    createdAt;
    updatedAt;
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.PersonRules = PersonRules;
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PersonRules.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(6),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PersonRules.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonRules.prototype, "biography", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PersonRules.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], PersonRules.prototype, "isOpenToWork", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], PersonRules.prototype, "isFreelancer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PersonRules.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PersonRules.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PersonRules.prototype, "updatedAt", void 0);
class PersonValidator extends class_validator_fields_1.default {
    validate(data) {
        return super.validate(new PersonRules(data ?? {}));
    }
}
exports.PersonValidator = PersonValidator;
class PersonValidatorFactory {
    static create() {
        return new PersonValidator();
    }
}
exports.PersonValidatorFactory = PersonValidatorFactory;
exports.default = PersonValidatorFactory;
