import { MongoClient } from "mongodb";
import { Resolve } from "../../../container";
import { MongoClientInstance } from "./client";





export const Database = Symbol.for("database");


const DatabaseProvider = {
    provide:Database,
    async useFactory(client:MongoClient){
        
        return client.db();
    },
    inject:[MongoClientInstance]
}


Resolve.add(DatabaseProvider);