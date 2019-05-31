const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const server = express();
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, './client/dist')))


server.get('/test', (req, res) => {
    res.send('testing data')
})

server.post('/addToTail', (req,res) => {
    req = req.body.newNode;
    console.log(req);
    res.send('Req received! Adding to LinkedList Now')
})

server.listen(port, () => {
    console.log('Listening on port ' + port);
})