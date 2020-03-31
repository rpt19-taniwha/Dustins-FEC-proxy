const express = require('express');
const path = require('path');

const proxy = express();
const port = process.env.Port || 5000;

proxy.use(express.json())
proxy.use(express.urlencoded({extended: false}));
proxy.use(express.static(path.join(__dirname, '..', 'public')));


proxy.get('/', (req, res) => {
res.end(200);

});

proxy.listen(port, () => {console.log(`Proxy Server is Listening on port ${port}!`)});