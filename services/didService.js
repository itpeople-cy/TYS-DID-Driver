/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */
const log4js = require("log4js");
const logger = log4js.getLogger('DID-SERVICE');
const config = require('config');
const axios = require('axios');
const tysDriver = require("../config/drivers.json")["tys-driver"];
const helper = require('../helpers/helper');
const util = require('util');
logger.level = config.logLevel;

/**
 * To resolve a DID document
 * @param {*} did DID
 */
exports.resolveDID = async function (did) {
    try {
        logger.info("resolveDID(): Resolve DID for ", did);
        // validate the DID
        const isDIDValid = await helper.validateDriver(did, tysDriver);
        if (!isDIDValid) {
            throw Error('DID is not in correct format');
        }
        const apiUrl = tysDriver.apiUrl;
        let didDocument;
        try {
            // Fetch the DID document
            const response = await axios.get(util.format('%s/%s', apiUrl, did));
            didDocument = response.data;
        } catch (err) {
            throw err.response.data
        }

        const parsedDid = await helper.parseDID(did);
        const resolvedDID = {};
        resolvedDID['@context'] = config.didContextUrl
        resolvedDID["didResolutionMetadata"] = await helper.getDIDResolutionMetadata(tysDriver.pattern, parsedDid);
        resolvedDID["didDocument"] = didDocument;
        resolvedDID["didDocumentMetadata"] = {};
        return resolvedDID;
    } catch (err) {
        throw err;
    }
};