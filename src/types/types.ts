import { Todo } from "../models/Todo";

export type Error = {
    message: string;
}

export type FetchResponse = {
    body: Todo[];
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}