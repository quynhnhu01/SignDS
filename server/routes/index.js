﻿const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");

const userRouter = require("./user");
const emailRouter = require("./email");
const uploadRouter = require("./upload");
const gridRouter = express.Router();
// Grid Page Endpoint
gridRouter.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
    res.json(sampleData.textAssets);
});

const ROUTER = {};
ROUTER.userRouter = userRouter;
ROUTER.uploadRouter = uploadRouter;
ROUTER.gridRouter = gridRouter;
ROUTER.emailRouter = emailRouter;
module.exports = ROUTER;
