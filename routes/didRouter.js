/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */
'use strict';
const express = require('express');
const router = express.Router();
const didController = require('../controllers/didController');
router.get('/1.0/identifiers/:did', didController.resolveDID);
module.exports = router;