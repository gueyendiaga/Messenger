const messages = require("../../controllers/message.controller");
const messageRouter = require("express").Router();

messageRouter.post("/chat/message", messages.create);
messageRouter.get("/chat/message", messages.findAll);

messageRouter.get("/chat/message/:id", messages.findOne);
messageRouter.put("/chat/message/:id", messages.update);
messageRouter.delete("/chat/message/:id", messages.delete);
messageRouter.delete("/chat/message/", messages.deleteAll);

messageRouter.get("/chat/users", messages.getAllUsers);
messageRouter.get("/chat/chatlists", messages.getChatLists);

module.exports = messageRouter;
