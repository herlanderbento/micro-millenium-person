import ValueObject from './value-object';
export declare class Uuid extends ValueObject<string> {
    readonly id?: string;
    constructor(id?: string);
    private validate;
}
export default Uuid;
