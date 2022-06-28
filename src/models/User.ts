import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    avatar_url: {
        type: DataTypes.STRING,
    }
})
User.sync();
export {User};