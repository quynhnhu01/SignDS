const CONTROLLER = {};
const userController = require('./user.controller');
const contractController = require('./contract.controller');
const emailController = require('./email.controller');
const verifyController = require('./verify.controller');
CONTROLLER.userController = userController;
CONTROLLER.contractController = contractController;
CONTROLLER.emailController = emailController;
CONTROLLER.verifyController = verifyController;
module.exports = CONTROLLER;