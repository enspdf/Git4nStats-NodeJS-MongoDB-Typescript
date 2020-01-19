"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: String,
    name: String,
    url: String,
    actionType: String,
    username: String
});
exports.default = mongoose_1.model("Event", schema);
