/**
 * Copyright 2023 IT People Corporation. All Rights Reserved.
 * Created By :- Bharadwaj Ambati
 */
"use strict";

const express = require('express');
const router = express.Router();

const didRouter = require('./didRouter.js');
router.use(didRouter);   

module.exports = router;
