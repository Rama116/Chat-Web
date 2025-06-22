import  express from 'express';
import  { protectRoute }  from '../middleware/auth.js';
import { getUserForSidebar, getMessages, markMessageAsSeen } from '../controllers/MessageController.js';

const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUserForSidebar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("mark/:id", protectRoute, markMessageAsSeen);

export default messageRouter;