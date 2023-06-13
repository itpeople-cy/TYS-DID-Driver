/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const config = require('config');
const log4js = require('log4js')
const logger = log4js.getLogger('APP.js');
logger.level =config.logLevel;
const app = express();
app.options('*', cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
const routes = require('./routes/index.js');
app.use(routes);
const server = http.createServer(app);
server.listen(config.port, function () {
    logger.info('Server listening at ' + config.host + ':' + config.port);
});
server.timeout = 240000;