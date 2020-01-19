"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gistsEndpoint = (username) => `https://api.github.com/users/${username}/gists`;
exports.eventsEndpoint = (username) => `https://api.github.com/users/${username}/events`;
