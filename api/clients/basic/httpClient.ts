import MediaType from "../../../enums/mediaType";
import HttpMethod from "../../../enums/httpMethod";
import ResponseStatus from "../../../enums/responseStatus";
import Header from "../../../enums/header";

interface IResponse {
    status: ResponseStatus,
    data: Uint8Array
}

export type RequestHeaders = Partial<Record<Header, string>>;

interface IRequest {
    url: string,
    method: HttpMethod,
    data?: Uint8Array,
    query?: { [k: string]: any },
    headers?: RequestHeaders
}

export interface IHTTPClient {
    post(url: string, data: Uint8Array, headers?: RequestHeaders): Promise<IResponse>

    get(url: string, query?: { [k: string]: any }, headers?: RequestHeaders): Promise<IResponse>

    delete(url: string, headers?: RequestHeaders): Promise<IResponse>
}

class HTTPClient implements IHTTPClient {

    private static async request(request: IRequest): Promise<IResponse> {
        const url = new URL(request.url);
        url.search = request.query ? new URLSearchParams(request.query).toString() : "";

        const response = await fetch(url.toString(), {
            method: request.method,
            body: request.data,
            headers: {[Header.ContentType]: MediaType.BinaryContentType, ...request.headers}
        });

        return {
            status: response.status,
            data: new Uint8Array(await response.arrayBuffer())
        };
    }

    async post(url: string, data: Uint8Array, headers?: RequestHeaders): Promise<IResponse> {
        return HTTPClient.request({url, data, headers, method: HttpMethod.Post});
    }

    async get(url: string, query?: { [k: string]: any }, headers?: RequestHeaders): Promise<IResponse> {
        return HTTPClient.request({url, query, headers, method: HttpMethod.Get});
    }

    async delete(url: string, headers: RequestHeaders): Promise<IResponse> {
        return HTTPClient.request({url, headers, method: HttpMethod.Delete});
    }
}

export default HTTPClient;
