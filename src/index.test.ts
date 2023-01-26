import MethodWrapper from './index';

const methodDefaultOrderUsingCallbackDefautOrder = function(a:string, b:number, throwError:boolean, callback: (res:any,err?:any)=>void) {
    throwError ? callback(null, a+b):callback(a+b);
}

const methodDefaultOrderUsingCallbackReverseOrder = function(a:string, b:number, throwError:boolean, callback: (err:any,res?:any)=>void) {
    throwError ? callback(a+b):callback(null, a+b);
}

const methodReverseOrderUsingCallbackDefaultOrder = function(callback: (res:any,err?:any)=>any, a:string, b:number, throwError:boolean) {
    throwError ? callback(null, a+b):callback(a+b);
}

const methodReverseOrderUsingCallbackReverseOrder = function(callback: (err:any,res?:any)=>void, a:string, b:number, throwError:boolean) {
    throwError ? callback(a+b):callback(null, a+b);
}

const methodDefautOrderCallbackOnlyResult = function(a:string,b:number,throwError:boolean,callback:(res:any)=>void) {
    if(throwError) throw new Error();
    callback(a+b);
};
const methodReverseOrderCallbackOnlyResult = function(callback:(res:any)=>void, a:string, b:number, throwError:boolean) {
    if(throwError) throw new Error();
    callback(a+b);
};

describe('Wrapped Method with', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('default order of parameters', () => {
        describe('default order of callback parameters', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodDefaultOrderUsingCallbackDefautOrder);
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodDefaultOrderUsingCallbackDefautOrder);
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBe('a2');
                });
            })
        })
        describe('reverse order of callback parameters', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodDefaultOrderUsingCallbackReverseOrder,{callbackParamsOrder:false});
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodDefaultOrderUsingCallbackReverseOrder,{callbackParamsOrder:false});
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBe('a2');
                });
            })
        });
        describe('callback having only result parameter', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodDefautOrderCallbackOnlyResult);
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodDefautOrderCallbackOnlyResult);
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBeInstanceOf(Error);
                });
            })
        })
    })
    describe('reverse order of parameters', () => {
        describe('default order of callback parameters', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodReverseOrderUsingCallbackDefaultOrder,{paramsOrder:false});
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodReverseOrderUsingCallbackDefaultOrder,{paramsOrder:false});
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBe('a2');
                });
            })
        })
        describe('reverse order of callback parameters', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodReverseOrderUsingCallbackReverseOrder,{paramsOrder:false,callbackParamsOrder:false});
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodReverseOrderUsingCallbackReverseOrder,{paramsOrder:false,callbackParamsOrder:false});
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBe('a2');
                });
            })
        });
        describe('callback having only result parameter', () => {
            it("wraps without exceptions", () => {
                const method = MethodWrapper(methodReverseOrderCallbackOnlyResult,{paramsOrder:false});
                expect(method).toBeDefined();
            });
            describe("works as intended", () => {
                const method = MethodWrapper(methodReverseOrderCallbackOnlyResult,{paramsOrder:false});
                it("resolves on result", () => {
                    expect(method('a',2,false)).resolves.toBe('a2');
                });
                it("rejects on error",() => {
                    expect(method('a',2,true)).rejects.toBeInstanceOf(Error);
                });
            })
        })
    });
})
