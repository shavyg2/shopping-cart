import { Resolve } from "../../container"
import { Invoice, InvoiceType } from "../../provider/service/Invoice"
import { StripeAPI } from "../../provider/service/Stripe"


import faker from "faker";
import { Struct } from "../../util/validation";
import { MongoClientInstance } from "../../provider/database/mongo/client";
import { MongoClient } from "mongodb";


describe("Customer Invoice",()=>{

    const email = faker.internet.email();
    const description = faker.lorem.paragraph();


    afterAll(async ()=>{
        const client:MongoClient = await Resolve.get(MongoClientInstance)

        await client.close(true)
    })



    it("Creating an customer and issue an invoice",async()=>{
        const stripe = await Resolve.get<StripeAPI>(StripeAPI);
        const invoice = await Resolve.get<Invoice>(Invoice)


        await stripe.createCustomer(email,description)

        const [customer] = await stripe.getAllCustomers()

        
        const payment:Struct<typeof InvoiceType> = {
            amount:10000,
            customer_id:customer.customer_id
        }
        await invoice.createInvoice(payment)


        const invoices = await invoice.getCustomerInvoices(customer.customer_id)
        expect(invoices.length).toBeGreaterThan(0);
    })


})