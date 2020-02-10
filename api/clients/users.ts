import {inout} from "../../inout/inout";
import ResponseStatus from "../../enums/responseStatus";
import APIClient, {IAPIResponse} from "./basic/apiClient";
import ICreateUserRequestV1 = inout.ICreateUserRequestV1;
import {toHexString} from "../../functools/uuid";

type CreateUserResponse = inout.GetUserResponseV1 | inout.CreateUserBadRequestV1
type DeleteUserResponse = inout.GetUserResponseV1

export interface IUserAPIClient {
    create(body: inout.CreateUserRequestV1, authToken?: string): Promise<IAPIResponse<CreateUserResponse>>

    delete(id: string | Uint8Array, authToken?: string): Promise<IAPIResponse<DeleteUserResponse>>
}

class UserAPIClient extends APIClient implements IUserAPIClient {
    async create(body: inout.ICreateUserRequestV1, authToken?: string): Promise<IAPIResponse<CreateUserResponse>> {
        return this.write<ICreateUserRequestV1, CreateUserResponse>({
            authToken,
            url: this.routes.api.v1.users.list,
            bodyType: inout.CreateUserRequestV1,
            body: body,
            options: {
                [ResponseStatus.Created]: inout.GetUserResponseV1,
                [ResponseStatus.BadRequest]: inout.CreateUserBadRequestV1
            }
        });
    }

    async delete(id: string | Uint8Array, authToken?: string): Promise<IAPIResponse<DeleteUserResponse>> {
        id = typeof id === "string" ? id : toHexString(id);
        return this.remove<DeleteUserResponse>({
            authToken,
            url: this.routes.api.v1.users.detail(id),
            options: {
                [ResponseStatus.Ok]: inout.GetUserResponseV1,
                [ResponseStatus.Forbidden]: null
            }
        })
    }
}

export default UserAPIClient;
