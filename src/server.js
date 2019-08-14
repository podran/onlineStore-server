const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./config/routes');
const {connect} = require('./db');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    connect();
    });