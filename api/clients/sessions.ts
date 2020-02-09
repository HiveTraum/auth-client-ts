import APIClient, {IAPIResponse} from "./basic/apiClient";
import ResponseStatus from "../../enums/responseStatus";
import {inout} from "../../inout/inout";
import ICreateSessionRequestV1 = inout.ICreateSessionRequestV1;
import CreateSessionResponseV1 = inout.CreateSessionResponseV1;
import CreateSessionRequestV1 = inout.CreateSessionRequestV1;
import CreateSessionBadRequestResponseV1 = inout.CreateSessionBadRequestResponseV1;

type CreateSessionResponse = CreateSessionResponseV1 | CreateSessionBadRequestResponseV1;

export interface ISessionAPIClient {
    create(body: ICreateSessionRequestV1): Promise<IAPIResponse<CreateSessionResponse>>
}

class SessionAPIClient extends APIClient implements ISessionAPIClient {
    async create(body: ICreateSessionRequestV1): Promise<IAPIResponse<CreateSessionResponse>> {
        return this.write<ICreateSessionRequestV1, CreateSessionResponse>({
            url: this.routes.api.v1.sessions.list,
            bodyType: CreateSessionRequestV1,
            body: body,
            options: {
                [ResponseStatus.Created]: CreateSessionResponseV1,
                [ResponseStatus.BadRequest]: CreateSessionBadRequestResponseV1
            }
        });
    }
}

export default SessionAPIClient;
