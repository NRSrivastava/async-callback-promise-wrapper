export type OriginalMethod = (...args: any) => void;
type WrappedMethod = (...args: any[]) => Promise<any>;
declare function Wrap(originalMethod: OriginalMethod, { paramsOrder, callbackParamsOrder }?: {
    paramsOrder?: boolean | undefined;
    callbackParamsOrder?: boolean | undefined;
}): WrappedMethod;
export default Wrap;
//# sourceMappingURL=index.d.ts.map