import ResponseStatus from "../../../enums/responseStatus";
import HttpMethod from "../../../enums/httpMethod";
import {Writer} from "@apollo/protobufjs";
import getRoutes from "../../routes";
import HTTPClient, {IHTTPClient, RequestHeaders} from "./httpClient";
import Header from "../../../enums/header";

interface PlainOldJavaScriptObjectMessage {
    toJSON(): { [k: string]: any };
}

type Message = PlainOldJavaScriptObjectMessage | { [k: string]: any }

interface MessageType<T extends Message> {
    decode(message: Uint8Array): T,

    encode(message: T | { [k: string]: any }): Writer
}

type Options<Body> = Partial<Record<ResponseStatus, MessageType<Body> | null>>

interface APIRequest<ResponseBody extends PlainOldJavaScriptObjectMessage> {
    url: string,
    options: Options<ResponseBody>,
    authToken?: string
}

interface WriteRequest<RequestBody extends Message, ResponseBody extends PlainOldJavaScriptObjectMessage> extends APIRequest<ResponseBody> {
    body: RequestBody,
    bodyType: MessageType<RequestBody>,
}

interface ReadRequest<Query, Body extends PlainOldJavaScriptObjectMessage> extends APIRequest<Body> {
    query?: Query
}

interface RemoveRequest<ResponseBody extends PlainOldJavaScriptObjectMessage> extends APIRequest<ResponseBody> {

}

export interface IAPIResponse<Body> {
    status: ResponseStatus,
    data: Body
}

class APIClient {

    domain: string;
    routes: ReturnType<typeof getRoutes>;
    httpClient: IHTTPClient;

    constructor(domain: string, httpClient: IHTTPClient = new HTTPClient()) {
        this.domain = domain;
        this.routes = getRoutes(domain);
        this.httpClient = httpClient;
    }

    private static async readResponse<ResponseBody>(data: Uint8Array, method: string, status: number, url: string, option: MessageType<any> | null): Promise<ResponseBody> {

        if (!data || data && data.length <= 0) {
            return null
        }

        if (option === null) {
            return null
        }

        if (!option) {
            throw new Error(`Unknown status ${status} for route ${url} and method ${method}`)
        }

        return option.decode(data);
    }

    private static getHeaders(authToken?: string): RequestHeaders {
        const headers: RequestHeaders = {};
        headers[Header.Authorization] = authToken && `Bearer ${authToken}`;
        return headers;
    }

    async write<RequestBody extends Message, ResponseBody extends PlainOldJavaScriptObjectMessage>({url, bodyType, body, options, authToken}: WriteRequest<RequestBody, ResponseBody>): Promise<IAPIResponse<ResponseBody>> {
        const {status, data} = await this.httpClient.post(url, bodyType.encode(body).finish(), APIClient.getHeaders(authToken));
        return {
            status,
            data: await APIClient.readResponse<ResponseBody>(data, HttpMethod.Post, status, url, options[status])
        }
    }

    async read<Query, Body extends PlainOldJavaScriptObjectMessage>({url, query, options, authToken}: ReadRequest<Query, Body>): Promise<IAPIResponse<Body>> {
        const {status, data} = await this.httpClient.get(url, query, APIClient.getHeaders(authToken));
        return {status, data: await APIClient.readResponse<Body>(data, HttpMethod.Get, status, url, options[status])}
    }

    async remove<Body extends PlainOldJavaScriptObjectMessage>({url, options, authToken}: RemoveRequest<Body>): Promise<IAPIResponse<Body>> {
        const {status, data} = await this.httpClient.delete(url, APIClient.getHeaders(authToken));
        return {
            status,
            data: await APIClient.readResponse<Body>(data, HttpMethod.Delete, status, url, options[status])
        };
    }
}

export default APIClient;
