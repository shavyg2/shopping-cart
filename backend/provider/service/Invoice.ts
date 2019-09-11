import { Options } from "@slick-for/di";
import { Repo } from "../database/mongo/Repo";
import { Validation, Struct, TypeCheck } from "../../util/validation";
import { Resolve } from "../../container";

export const InvoiceType = Validation.type({
    amount:Validation.number,
    customer_id:Validation.string
})

@Options()
export class Invoice{

    constructor(private repo:Repo){

    }


    async createInvoice(payment:Struct<typeof InvoiceType>){

        payment = TypeCheck(InvoiceType,payment)
        await this.repo.Invoice.insertOne(payment)

    }


    async getCustomerInvoices(customer_id:any){

        let invoices = await this.repo.Invoice.find({
            customer_id
        }).toArray()
        return invoices;
    }

    async addCardToCustomer(customer_id,card:string){
        
    }
}


Resolve.add(Invoice)