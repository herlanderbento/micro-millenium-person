declare const EitherConstructor: new <Ok, Error>(...p: [Ok, Error]) => [Ok, Error];
export declare class Either<Ok, Error = any> extends EitherConstructor<Ok, Error> {
    constructor(...p: [Ok, Error]);
    static ok<T>(value: T): Either<T, null>;
    static fail<T>(error: T): Either<null, T>;
    getOk(): Ok;
    getFail(): Error;
    isOk(): boolean;
    isFail(): boolean;
}
export {};
