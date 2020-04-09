const express = require('express');
const path = require('path');
const cors = require('cors');

const proxy = express();
const port = process.env.Port || 5000;

proxy.use(express.json())
proxy.use(express.urlencoded({extended: false}));
proxy.use(express.static(path.join(__dirname, '/../public/')));

proxy.use(cors());

proxy.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../public/'),
  });
});


proxy.listen(port, () => {console.log(`Proxy Server is Listening on port ${port}!`)});