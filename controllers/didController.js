/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */

const log4js = require("log4js");
const didService = require('../services/didService');
const logger = log4js.getLogger('DID-CONTROLLER');
const config = require('config');
logger.level = config.logLevel;

/**
 * To query a DID document
 * @param {*} req request
 * @param {*} res response
 */
exports.resolveDID = async function (req, res) {
    try {
        logger.info('resolveDID() Called endpoint to resolve a DID document');
        const result = await didService.resolveDID(req.params.did);
        res.status(200).send(result);
    } catch (err) {
        logger.error("An error occured while resolving DID ", err);
        res.status(err.statusCode).send(err.message);
    }
};