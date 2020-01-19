"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../service/userService");
/**
 * Controller Used to get the github user information related to n users requested
 *
 * @param req
 * @param res
 */
async function getUsersData(req, res) {
    var _a, _b;
    const { usernames } = (_a = req) === null || _a === void 0 ? void 0 : _a.body;
    /**
     * Check if some users were send on the request to process it
     */
    if ((_b = usernames) === null || _b === void 0 ? void 0 : _b.length) {
        let processResponse = await userService_1.processUser(usernames);
        return res.status(200).json({
            processResponse,
            status: 200
        });
    }
    else {
        return res.status(422).json({
            message: "The usernames are required to search gist and events",
            status: 422
        });
    }
}
exports.getUsersData = getUsersData;
;
