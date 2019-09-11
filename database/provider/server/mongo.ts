
import * as mms from "mongodb-memory-server";
import { join} from "path";
import { Resolve } from "../../container";
import is from "@sindresorhus/is";
import os from "os";



export const MongoServerInstance = Symbol.for("mongo-server-instance");

export const MongoServerInstanceProvider = {
    provide:MongoServerInstance,
    async useFactory(){
        
        console.log("setting up the factory")
        let root = join(os.tmpdir(),"mongo")

        if(!is.string(root)){
            throw new Error(root);
        }

        console.log(root);
        const server = new mms.MongoMemoryServer({
            instance:{
                
            },
            binary:{
                downloadDir:root
            }
        })

        return server;
    }
}


Resolve.add(MongoServerInstanceProvider);