import { Options,As } from "@slick-for/di";
import { Database } from "./database";
import { Db } from "mongodb";
import { Resolve } from "../../../container";





@Options()
export class Repo {

    constructor(@As(Database) private db:Db){
        
    }

    get User(){
        return this.db.collection("users")
    }

    get Appointment(){
        return this.db.collection("appointments")
    }
    get Invoice(){
        return this.db.collection("invoices")
    }
}


Resolve.add(Repo)