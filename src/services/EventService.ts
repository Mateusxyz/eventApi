const moment = require("moment");
import { Op } from "sequelize";
import * as Interfaces from "../interfaces/interfaces";
import { Event } from "../models/Event";

export async function create({ body, file }: { body:Interfaces.Event; file?: any; }) {
    let newEvent: Interfaces.Event = body;
    newEvent.date = moment(newEvent.date, "DD/MM/YYYY").toDate();
    newEvent.img_url = file?.filename;
    let resp = await Event.create(newEvent);
    return { msg: "Evento criado.", id: resp.getDataValue('id') }
}

export async function getRecent() {
    let events = await Event.findAll({
        limit: 10,
        raw: true
    })
    return events
}

export async function get({ id }: { id: Number; }) {
    let event = await Event.findOne({
        where: {
            id
        }
    })
    let resEvent = event?.get();
    resEvent.date = moment(event?.get().date, "YYYY-MM-DD").format("DD/MM/YYYY");
    return event
}

export async function del({ id }: { id: Number; }) {
    await Event.destroy({
        where: {
            id
        }
    })
    
    return { msg: "Evento deletado." }
}

export async function update({ id, body }: { id: Number; body: Interfaces.Event; }) {
    await Event.update(body, {
        where: {
            id
        }
    })
    return { msg: "Evento atualizado." }
}

export async function search({ query }: { query: String; }) {
    let res = await Event.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${query}%`,
                    },
                },
                {
                    description: {
                        [Op.like]: `%${query}%`,
                    }
                }
            ],

        }
    })
    return res
}