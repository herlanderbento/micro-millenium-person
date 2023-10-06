"use strict";
global.fail = (message) => {
    throw new Error(message);
};
jest.mock('ioredis', () => {
    return function () { };
});
