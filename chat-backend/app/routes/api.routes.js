module.exports = app => {
  const messageRouter = require('./message/message.route');
  const authRouter = require('./authentification/authentification.route');
  const apiPrefix = '/api/v1';
  app.use(apiPrefix, messageRouter);
  app.use(apiPrefix, authRouter);
};
