"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = express_1.Router();
/**
 * Route Used to get all the users data under /api/users path POST request
 */
router.route("/users")
    .post(userController_1.getUsersData);
exports.default = router;
