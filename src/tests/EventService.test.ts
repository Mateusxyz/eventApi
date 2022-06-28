import { sequelize, testConection } from "../config/sequelize";
import * as CheckoutService from "../services/CheckoutService";
import * as EventService from "../services/EventService";
import * as Interfaces from "../interfaces/interfaces";
import * as moment from "moment";

let testEvent:Interfaces.Event;
let id:number;
testEvent = {
    title: "test1",
    description: "lotem ipsum",
    date: moment("25/05/2005", "DD/MM/YYYY").toDate(),
    location: "Rua teste",
}
let resEvent = {
    title:testEvent.title,
    date:testEvent.date.toString(),
    description:testEvent.description,
    location:testEvent.location
};
resEvent.date = moment("25/05/2005", "DD/MM/YYYY").format("DD/MM/YYYY");

beforeAll(async ()=>{
    await testConection();
})

test("Teste de criação de evento.", async ()=>{
    let result = await EventService.create({body: testEvent});
    id=result.id;
    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Object);
})

test("Teste de retorno de evento.", async ()=>{
    let result = await EventService.get({id});
    expect(result).not.toBeNull();
    expect(result?.get()).toMatchObject(resEvent);
    expect(result).toBeInstanceOf(Object);
})

test("Teste de retorno de varios eventos.", async ()=>{
    let result = await EventService.getRecent();
    expect(result).not.toBeNull();
})

test("Teste de alteração de evento.", async ()=>{
    let result = await EventService.update({id, body: testEvent});
    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Object);
})

test("Teste de exclusão de evento.", async ()=>{
    let result = await EventService.del({id});
    expect(result).toEqual({ msg: "Evento deletado." });
    expect(result).toBeInstanceOf(Object);
})