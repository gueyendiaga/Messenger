const messages = require("../../controllers/message.controller");
const messageRouter = require("express").Router();

messageRouter.post("/chat/message", messages.create);
messageRouter.get("/chat/message", messages.findAll);
messageRouter.get("/chat/users", messages.getAllUsers);
messageRouter.get("/chat/users-discussions", messages.getUsersDiscussions);
messageRouter.get("/chat/groupes-discussions", messages.getGroupeDiscussions);

/*messageRouter.get("/chat/message/:id", messages.findOne);
messageRouter.put("/chat/message/:id", messages.update);
messageRouter.delete("/chat/message/:id", messages.delete);
messageRouter.delete("/chat/message/", messages.deleteAll);
*/


module.exports = messageRouter;
