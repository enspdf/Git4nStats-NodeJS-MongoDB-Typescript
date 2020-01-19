export interface EventsResponse {
    id: string;
    type: string;
    actor: Actor;
    repo: Repo;
    payload: Payload;
    public: boolean;
    created_at: string;
    org?: Org | null;
}

export interface Actor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

export interface Repo {
    id: number;
    name: string;
    url: string;
}

export interface Payload {
    push_id?: number | null;
    size?: number | null;
    distinct_size?: number | null;
    ref?: string | null;
    head?: string | null;
    before?: string | null;
    commits?: (CommitsEntity)[] | null;
    ref_type?: string | null;
    master_branch?: string | null;
    description?: null;
    pusher_type?: string | null;
    action?: string | null;
}

export interface CommitsEntity {
    sha: string;
    author: Author;
    message: string;
    distinct: boolean;
    url: string;
}

export interface Author {
    email: string;
    name: string;
}

export interface Org {
    id: number;
    login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}
