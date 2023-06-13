/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */
const config = require('config');
const utils =require('util');

/**
 * To validate the DID driver
 * @param {*} did DID
 * @param {*} driver DID driver
 * @returns 
 */
exports.validateDriver = function (did, driver) {
    let result = false;
    const pattern = driver.pattern;
    const regexOutput = did.match(pattern);
    regexOutput != null ? result = true : result = false;
    return result;
}

/**
 * To parser the DID
 * @param {*} did DID
 * @returns
 */
exports.parseDID = function (did) {
    const parsedDID = {}
    const splittedVal = did.split(":");
    parsedDID["didString"] = did;
    parsedDID["method"] = splittedVal[1];
    parsedDID["methodSpecificId"] = splittedVal[2];
    return parsedDID;
}

/**
 * To get the DID resolution metadata
 * @param {*} didPattern DID pattern
 * @param {*} parsedDid parsed DID data
 * @returns 
 */
exports.getDIDResolutionMetadata = function (didPattern, parsedDid) {
    let didResolutionMetadata = {};
    didResolutionMetadata["contentType"] = config.didResolutionContectType;
    didResolutionMetadata["pattern"] = didPattern;
    didResolutionMetadata["driverUrl"] = utils.format('%s:%s/1.0/identifiers/', config.host, config.port);
    didResolutionMetadata["did"] = {};
    didResolutionMetadata["did"]["didString"] = parsedDid.didString;
    didResolutionMetadata["did"]["methodSpecificId"] = parsedDid.methodSpecificId;
    didResolutionMetadata["did"]["method"] = parsedDid.method;
    return didResolutionMetadata;
}
