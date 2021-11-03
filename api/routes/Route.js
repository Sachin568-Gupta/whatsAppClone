import express from "express";
import { addUser, getAllUsers } from "../controller/User.js";
import {
  startConversation,
  getConversation,
} from "../controller/Conversation.js";
import { addNewMessage, getMessage } from "../controller/Messages.js";

const route = express.Router();

route.post("/addUser", addUser);
route.get("/getUsers", getAllUsers);
route.post("/conversation/add", startConversation);
route.post("/conversation/get", getConversation);
route.post("/message/addNewMessage", addNewMessage);
route.get("/message/get/:id", getMessage);

export default route;
