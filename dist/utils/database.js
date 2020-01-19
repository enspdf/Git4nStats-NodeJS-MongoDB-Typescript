"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    // Remote Connection
    await mongoose_1.connect("mongodb://git4nstats:git4nstats@ds017256.mlab.com:17256/git4nstats", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    // Local Connection
    /*await connect("mongodb://localhost/git4nstats", {
        useNewUrlParser: true,
        useFindAndModify: true
    });*/
    console.log("Database Connected");
}
exports.startConnection = startConnection;
;
