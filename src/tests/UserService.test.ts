import { testConection } from "../config/sequelize";
import * as Interfaces from "../interfaces/interfaces";
import  * as UserService from "../services/UserService";

beforeAll(async ()=>{
    await testConection();
})

let testUser:Interfaces.User;
testUser = {
    username: "teste",
    password: "123",
    role: 1
}

test("Criação de usuario", async () => {
    let result = await UserService.create({body:testUser, role:0});
    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Object);
});

test("Criação de admin", async () => {
    let result = await UserService.create({body:testUser, role:1});
    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Object);
});