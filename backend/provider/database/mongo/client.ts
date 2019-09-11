import { MongoClient } from "mongodb";
import { Resolve } from "../../../container";
import { MongoConnectionString } from "./connection";



export const MongoClientInstance = Symbol.for("mongo-client")

const MongoClientInstanceProvider = {
    provide:MongoClientInstance,

    async useFactory(connection:string){

        return await MongoClient.connect(connection,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
    },
    inject:[MongoConnectionString]
}

Resolve.add(MongoClientInstanceProvider);