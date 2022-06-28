import { Request } from "express";
import * as Interfaces from "../interfaces/interfaces";
import { User } from "../models/User";

export async function create({ body, role, file }: { body: Interfaces.User; role:number; file?:any; }) {
    let newUser:Interfaces.User = body;
    let res = await User.findOne({
        where:{
            username: body.username
        }
    });
    newUser.role = role;
    newUser.avatar_url = file?.filename;
    if (res) {
        return {msg:"Usuário já cadastrado."}
    } else {
        await User.create(newUser);
        return {msg:"Usuário criado."}
    }
}