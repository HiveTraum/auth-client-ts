import {inout} from "../../inout/inout";
import ResponseStatus from "../../enums/responseStatus";
import APIClient, {IAPIResponse} from "./basic/apiClient";
import CreatePhoneConfirmationRequestV1 = inout.CreatePhoneConfirmationRequestV1;
import ICreatePhoneConfirmationRequestV1 = inout.ICreatePhoneConfirmationRequestV1;
import CreatePhoneConfirmationResponseV1 = inout.CreatePhoneConfirmationResponseV1;
import CreatePhoneConfirmationBadRequestV1 = inout.CreatePhoneConfirmationBadRequestV1;

type CreatePhoneConfirmationResponse =
    inout.CreatePhoneConfirmationResponseV1
    | inout.CreatePhoneConfirmationBadRequestV1

export interface IPhoneConfirmationAPIClient {
    create(body: CreatePhoneConfirmationRequestV1): Promise<IAPIResponse<CreatePhoneConfirmationResponse>>
}

class PhoneConfirmationAPIClient extends APIClient implements IPhoneConfirmationAPIClient {
    async create(body: inout.ICreatePhoneConfirmationRequestV1): Promise<IAPIResponse<CreatePhoneConfirmationResponse>> {
        return this.write<ICreatePhoneConfirmationRequestV1, CreatePhoneConfirmationResponse>({
            url: this.routes.api.v1.phoneConfirmations.list,
            body,
            bodyType: CreatePhoneConfirmationRequestV1,
            options: {
                [ResponseStatus.Created]: CreatePhoneConfirmationResponseV1,
                [ResponseStatus.BadRequest]: CreatePhoneConfirmationBadRequestV1
            }
        });
    }
}

export default PhoneConfirmationAPIClient;
