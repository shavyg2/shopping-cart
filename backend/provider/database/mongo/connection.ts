
import fetch from "node-fetch";
import {Resolve} from "../../../container";

export const MongoConnectionString = Symbol.for("mongo-connection");


const MongoConnectionStringProvider = {
    provide:MongoConnectionString,
    async useFactory(){
        const res = await fetch("http://localhost:3001/api/connection")
        return await res.text();
    }
}


Resolve.add(MongoConnectionStringProvider)