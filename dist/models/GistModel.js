"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: String,
    url: String,
    description: String,
    username: String
});
exports.default = mongoose_1.model("Gist", schema);
