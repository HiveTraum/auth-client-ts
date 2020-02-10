import PhoneConfirmationAPIClient from "./phoneConfirmations";
import env from "../../config/environment";
import ResponseStatus from "../../enums/responseStatus";
import {inout} from "../../inout/inout";
import CreatePhoneConfirmationBadRequestV1 = inout.CreatePhoneConfirmationBadRequestV1;
import {getRandomPhoneNumber} from "../../testUtils";

test("Create phone confirmation with incorrect phone", async () => {
    const phoneConfirmationAPIClient = new PhoneConfirmationAPIClient(env.ApiDomain);
    const {data, status} = await phoneConfirmationAPIClient.create({phone: "123"});
    expect(status).toEqual(ResponseStatus.BadRequest);
    expect(data).toBeInstanceOf(CreatePhoneConfirmationBadRequestV1);
    const phoneConfirmation = data as CreatePhoneConfirmationBadRequestV1;
    expect(phoneConfirmation.phone).toHaveLength(1)
});

test("Create phone confirmation with correct phone and without region", async () => {
    const phoneConfirmationAPIClient = new PhoneConfirmationAPIClient(env.ApiDomain);
    const phone = getRandomPhoneNumber();
    const {data, status} = await phoneConfirmationAPIClient.create({phone});
    expect(status).toEqual(ResponseStatus.BadRequest);
    expect(data).toBeInstanceOf(CreatePhoneConfirmationBadRequestV1);
    const phoneConfirmation = data as CreatePhoneConfirmationBadRequestV1;
    expect(phoneConfirmation.phone).toHaveLength(1)
});
