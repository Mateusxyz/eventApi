import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import { Event } from "./Event";
import { User } from "./User";

export const PurchaseRequest = sequelize.define("PurchaseRequest", {
})

Event.belongsToMany(User, {through: PurchaseRequest});
User.belongsToMany(Event, {through: PurchaseRequest});

PurchaseRequest.sync();