import { Sequelize } from "sequelize";
//configurações do sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/sqlite.db",
});

//teste de conexão
async function testConection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com banco estabelecida.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco', error);
    }
}


export { sequelize, testConection };