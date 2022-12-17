const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewear = jsonserver.defaults();
const port = process.env.PORT || 8000;


server.use(middlewear);
server.use(router);

server.listen(port);