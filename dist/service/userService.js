"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ApiResponse_1 = require("../interfaces/ApiResponse");
const EventModel_1 = __importDefault(require("../models/EventModel"));
const GistModel_1 = __importDefault(require("../models/GistModel"));
const constants_1 = require("../utils/constants");
/**
 * Get the users array and try to get the gists and events
 */
exports.processUser = async (users) => {
    const usersList = Array.from(users);
    let apiResponse = [];
    // iterate each username to search and process individual
    for (let username of usersList) {
        let responsePerUser = new ApiResponse_1.ApiResponse();
        responsePerUser.username = username;
        let userGistResponse = new Array();
        let userEventResponse = new Array();
        // Search the gists
        let userGists = await exports.searchGists(username);
        userGists = userGists.slice(0, 3);
        // Iterate the gists
        userGists.forEach(currentGist => {
            const newGist = {
                id: currentGist.id,
                url: currentGist.url,
                description: currentGist.description,
                username
            };
            // Save Each Gists
            const gist = new GistModel_1.default(newGist);
            gist.save();
            userGistResponse.push(newGist);
        });
        // Search the events
        let userEvents = await exports.searchEvents(username);
        userEvents = userEvents.slice(0, 5);
        // Iterate the events
        userEvents.forEach(currentEvent => {
            const newEvent = {
                id: currentEvent.id,
                name: currentEvent.repo.name,
                url: currentEvent.repo.url,
                actionType: currentEvent.type,
                username
            };
            // Save each event
            const event = new EventModel_1.default(newEvent);
            event.save();
            userEventResponse.push(newEvent);
        });
        // Build the response per each username given
        responsePerUser.events = userEventResponse;
        responsePerUser.gists = userGistResponse;
        apiResponse.push(responsePerUser);
    }
    return apiResponse;
};
/**
 * Search the gists related to the given github username
 *
 * @param username
 */
exports.searchGists = async (username) => {
    return await axios_1.default
        .get(constants_1.gistsEndpoint(username))
        .then(response => response.data)
        .catch(err => console.log(err));
};
/**
 * Search the events related to the given github username
 *
 * @param username
 */
exports.searchEvents = async (username) => {
    return await axios_1.default
        .get(constants_1.eventsEndpoint(username))
        .then(response => response.data)
        .catch(err => console.log(err));
};
