import { Request, Response } from "express";
import  * as EventService from "../services/EventService";
import  * as CheckoutService from "../services/CheckoutService";
import * as Interfaces from "../interfaces/interfaces";
import { generateUrl, writeLog } from "../utils/utils";

export async function create(req:Request, res:Response) {
    try {
        let body:Interfaces.Event = req.body;
        res.json(await EventService.create({body, file:req.file}));
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function update(req:Request, res:Response) {
    try {
        let id:number = req.query.id as unknown as number;
        let body:Interfaces.Event = req.body;
        res.json(await EventService.update({ id, body}));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function get(req:Request, res:Response) {
    try {
        let id:number = req.query.id as unknown as number;
        let resEvent = (await EventService.get({ id }))?.get();
        resEvent.img_url = generateUrl(resEvent.img_url, req);
        res.json(resEvent);
        
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function home(req:Request, res:Response) {
    try {
        let resEvent:Interfaces.Event[] = (await EventService.getRecent()) as unknown as Interfaces.Event[];
        resEvent.forEach(element => {
            element.img_url = generateUrl(element.img_url!, req);
        });
        res.json(resEvent);
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function del(req:Request, res:Response) {
    try {
        let id:number = req.query.id as unknown as number;
        res.json(await EventService.del({ id }));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function checkout(req:Request, res:Response) {
    try {
        let EventId:number = req.query.id as unknown as number;
        res.json(await CheckoutService.checkout({EventId}));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function search(req:Request, res:Response) {
    try {
        let query:String = req.query.q as unknown as String;
        res.json(await EventService.search({query}));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}