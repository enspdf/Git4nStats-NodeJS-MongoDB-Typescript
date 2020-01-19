"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor() {
        this.username = "";
        this.gists = new Array();
        this.events = new Array();
    }
}
exports.ApiResponse = ApiResponse;
;
class Gists {
    constructor() {
        this.id = "";
        this.url = "";
        this.description = "";
        this.username = "";
    }
}
exports.Gists = Gists;
;
class Events {
    constructor() {
        this.id = "";
        this.name = "";
        this.url = "";
        this.actionType = "";
        this.username = "";
    }
}
exports.Events = Events;
;
