import { PurchaseRequest } from "../models/PurchaseRequest";
import * as Interfaces from "../interfaces/interfaces";

export async function checkout({ EventId }: { EventId: number; }) {
    
    let newEvent:Interfaces.PurchaseRequest;
    newEvent = {
        EventId,
        UserId: 1
    }

    console.log("Evneto: "+JSON.stringify(newEvent))
    await PurchaseRequest.create(newEvent);
}