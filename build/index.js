"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Wrap(originalMethod, { paramsOrder = true, callbackParamsOrder = true } = {}) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const promiseHandler = (res, err) => {
                if (err) {
                    reject(err);
                    return;
                }
                else {
                    resolve(res);
                    return;
                }
            };
            const callbackParametersHandler = (arg1, arg2) => {
                callbackParamsOrder ? promiseHandler(arg1, arg2) : promiseHandler(arg2, arg1);
            };
            try {
                paramsOrder ? originalMethod(...args, callbackParametersHandler) : originalMethod(callbackParametersHandler, ...args);
            }
            catch (err) {
                reject(err);
                return;
            }
        });
    };
}
exports.default = Wrap;
