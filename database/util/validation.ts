import * as t from "io-ts";


export const Validation:typeof t = t;
import { PathReporter } from "io-ts/lib/PathReporter";

export function TypeCheck<T extends t.Props>(type:t.PartialC<T>,value:any):t.TypeOf<t.TypeC<T>>
export function TypeCheck(type:t.StringC,value:string):string;
export function TypeCheck<T extends t.Props>(type:t.TypeC<T>,value:any):t.TypeOf<t.TypeC<T>>
export function TypeCheck(type: t.Any, value: any) {
    let result = type.decode(value);
    let message = PathReporter.report(result).filter(x=>!/No Errors/i.test(x));
    
    
    if (message && message.length) {
        let errorMsg = message.join("\n");
        throw new Error(errorMsg);
    }
    return value;
}


export type Struct<T extends t.TypeC<any>|t.UnionC<[t.Mixed, t.Mixed, ...t.Mixed[]]>|t.IntersectionC<[t.Mixed, t.Mixed, ...t.Mixed[]]>> = t.TypeOf<T>;