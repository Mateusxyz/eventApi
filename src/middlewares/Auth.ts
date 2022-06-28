import { User } from "../models/User"

export async function basic(username:String, password:String, authorize:CallableFunction) {
    let res = await User.findOne({
        where:{
            username,
            password
        }
    })
    if (res) {
        authorize(null, true)
    }else{
        authorize(null, false)
    }

}

export async function admin(username:String, password:String, authorize:CallableFunction) {
    let res = await User.findOne({
        where:{
            username,
            role: 1,
            password
        }
    })
    if (res) {
        authorize(null, true)
    }else{
        authorize(null, false)
    }

}