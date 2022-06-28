import { Request } from "express";
const moment = require("moment");
import fs from "fs";
export function generateUrl(file_name:String, req:Request):String {
    let protocol:String = req.protocol!;
    let host:String = req.get('host')!;
    return protocol+"://"+host+"/"+file_name;
}

export function writeLog(error:any) {
    fs.appendFileSync("./log/log.txt", `[${moment().format()}] ${error}\n`);
}