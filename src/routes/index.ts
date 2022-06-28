import express, { Router } from "express";
import multer from "multer";
import { storage } from "../middlewares/multer";
import * as eventController from "../controllers/EventController";
import * as UserController from "../controllers/UserController";
import * as Auth from "../middlewares/Auth";
import basicAuth from 'express-basic-auth'


export const router = Router();
const fileMiddle = multer({dest:"./uploads", storage:storage });

router.use(express.static('uploads'));

//rotas Eventos
router.post("/create", basicAuth({
    authorizeAsync: true,
    authorizer: Auth.admin,
}), fileMiddle.single('img'), eventController.create);
router.post("/update", basicAuth({
    authorizeAsync: true,
    authorizer: Auth.admin,
}), fileMiddle.single('img'), eventController.update);
router.get("/del", basicAuth({
    authorizeAsync: true,
    authorizer: Auth.admin,
}), eventController.del);
router.get("/get", eventController.get);
router.get("/home", eventController.home);
router.get("/checkout", basicAuth({
    authorizeAsync: true,
    authorizer: Auth.basic,
}), eventController.checkout);

//rotas user
router.post("/register", fileMiddle.single('avatar'), UserController.create);
router.post("/registerAdmin", fileMiddle.single('avatar'), UserController.createAdmin);

//busca
router.get("/search", eventController.search)