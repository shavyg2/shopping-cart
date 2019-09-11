import * as mms from "mongodb-memory-server";
import { MongoServerInstance } from "./mongo";
import { Resolve } from "../../container";


export const ConnectionString = Symbol.for("connection-string");

export const ConnectionStringProvider = {
    provide:ConnectionString,
    useFactory(server:mms.MongoMemoryServer){
        return server.getConnectionString()
    },
    inject:[MongoServerInstance]

}


Resolve.add(ConnectionStringProvider);