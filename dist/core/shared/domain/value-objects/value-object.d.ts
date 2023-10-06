export declare abstract class ValueObject<Value = any> {
    protected readonly _value: Value;
    constructor(value: Value);
    get value(): Value;
    equals(obj: this): boolean;
    toString: () => string;
}
export default ValueObject;
