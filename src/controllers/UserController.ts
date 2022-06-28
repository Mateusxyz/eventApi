import { Request, Response } from "express";
import  * as UserService from "../services/UserService";
import * as Interfaces from "../interfaces/interfaces";
import { writeLog } from "../utils/utils";

export async function create(req:Request, res:Response) {
    try {
        let body:Interfaces.User = req.body;
        res.json(await UserService.create({ body, role:1, file:req.file }));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}

export async function createAdmin(req:Request, res:Response) {
    try {
        let body:Interfaces.User = req.body;
        res.json(await UserService.create({ body, role:1, file:req.file }));
    } catch (error) {
        res.sendStatus(500);
        writeLog(error);
    }
}