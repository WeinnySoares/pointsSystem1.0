require('dotenv').config()

const restify = require('restify');

const server = restify.createServer();

//Controllers
const pointController = require('./Controllers/PointController');
const userController  = require('./Controllers/UserController');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Routes
server.get('/point', pointController.index);
server.post('/point', pointController.create);
server.put('/point/:id', pointController.alter);
server.del('/point/:id', pointController.delete);

server.listen(process.env.PORT,()=>{
    console.log(`started server in port ${process.env.PORT}`);
});