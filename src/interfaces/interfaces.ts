import { Model } from "sequelize";

export type Event = {
    description?: String,
    date: Date,
    title: String,
    location: String,
    img_url?: String
}

export type PurchaseRequest = {
    UserId: number,
    EventId: number
}

export type User = {
    role: number;
    username: String,
    password: String,
    avatar_url?: String
}