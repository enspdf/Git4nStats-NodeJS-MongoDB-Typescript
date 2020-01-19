"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.set("port", process.env.PORT || 4000);
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use("/api", usersRoute_1.default);
exports.default = app;
