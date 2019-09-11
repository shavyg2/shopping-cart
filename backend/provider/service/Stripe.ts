import { Options } from "@slick-for/di";
import { Resolve } from "../../container";

import Stripe from "stripe";
import { Repo } from "../database/mongo/Repo";
import { ObjectID } from "mongodb";

const stripe_key = "pk_test_RIOKXNYk6uOA3MOdtJYv1OyG00osvdQUDT";
const stripe_key_secret = "sk_test_Olpb0YoxwWceMH87rdJBDF91002VH60D6P"
const stripe = new Stripe(stripe_key_secret);



@Options()
export class StripeAPI{



    constructor(private repo:Repo){

    }

    async getAllCustomers(){
        const customers = await this.repo.User.find({}).toArray()
        return customers;
    }


    async createCustomer(email:string,description:string){
        const stripe_result = await stripe.customers.create({
            email,
            description,
        })


        const customer_id = stripe_result.id;

        const mongo_result = await this.repo.User.insertOne({
            customer_id,
            email,
            description
        })
    }


    async getCustomerByID(id:string){
        const _id = new ObjectID(id);

        return await this.repo.User.findOne({
            _id
        })
    }


    async createPaymentIntent(){
        //https://stripe.com/docs/payments/cards/saving-cards-without-payment
        const intent = await stripe.setupIntents.create({
            usage:"off_session"
        })

        
        return intent.client_secret;
    }

    async attachPaymentMethodToCustomer(customer_id:string, payment_method:any){
        stripe.paymentMethods.attach(payment_method,{
            customer:customer_id
        })
    }


    async attachCardToCustomer(){

    }

}


Resolve.add(StripeAPI);