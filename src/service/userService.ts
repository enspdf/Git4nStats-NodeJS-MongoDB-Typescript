import axios from 'axios';

import { ApiResponse, Events, Gists } from '../interfaces/ApiResponse';
import { EventsResponse } from '../interfaces/events/EventsResponse';
import { GistsResponse } from '../interfaces/gists/GistsRespose';
import Event from '../models/EventModel';
import Gist from '../models/GistModel';
import { eventsEndpoint, gistsEndpoint } from '../utils/constants';

/**
 * Get the users array and try to get the gists and events
 */
export const processUser = async (users: string): Promise<ApiResponse[]> => {
    const usersList = Array.from(users);
    let apiResponse: ApiResponse[] = [];


    // iterate each username to search and process individual
    for (let username of usersList) {
        let responsePerUser: ApiResponse = new ApiResponse();
        responsePerUser.username = username;

        let userGistResponse: Gists[] = new Array<Gists>();
        let userEventResponse: Events[] = new Array<Events>();

        // Search the gists
        let userGists: GistsResponse[] = await searchGists(username);
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
            const gist = new Gist(newGist);
            gist.save();

            userGistResponse.push(newGist);
        });

        // Search the events
        let userEvents: EventsResponse[] = await searchEvents(username);
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
            const event = new Event(newEvent);
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
export const searchGists = async (username: string): Promise<GistsResponse[]> => {
    return await axios
        .get(gistsEndpoint(username))
        .then(response => response.data)
        .catch(err => console.log(err));
};

/**
 * Search the events related to the given github username
 * 
 * @param username 
 */
export const searchEvents = async (username: string): Promise<EventsResponse[]> => {
    return await axios
        .get(eventsEndpoint(username))
        .then(response => response.data)
        .catch(err => console.log(err));
}