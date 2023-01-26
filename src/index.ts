export type OriginalMethod = (...args:any) => void;
type WrappedMethod = (...args:any[]) => Promise<any>;



function Wrap(originalMethod:OriginalMethod, {paramsOrder=true, callbackParamsOrder=true}={}) : WrappedMethod  {
    return function(...args){
        return new Promise((resolve, reject) => {

            const promiseHandler = (res:any,err:any) => {
                if(err){
                    reject(err);
                    return;
                } 
                else {
                    resolve(res);
                    return;
                }
            }

            const callbackParametersHandler = (arg1:any,arg2:any)=>{
                callbackParamsOrder ? promiseHandler(arg1,arg2) : promiseHandler(arg2,arg1);
            }

            try {
                paramsOrder ? originalMethod(...args,callbackParametersHandler) : originalMethod(callbackParametersHandler,...args);
            } catch (err) {
                reject(err);
                return;
            }
        });
    }
}

export default Wrap;
