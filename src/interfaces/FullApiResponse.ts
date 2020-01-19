export class FullApiResponse {
    username: string = "";
    gists: Gists[] = new Array<Gists>();
    events: Events[] = new Array<Events>();
};

export class Gists {
    id: string = "";
    url: string = "";
    description: string = "";
    username: string = "";
};

export class Events {
    id: string = "";
    name: string = "";
    url: string = "";
    actionType: string = "";
    username: string = "";
};