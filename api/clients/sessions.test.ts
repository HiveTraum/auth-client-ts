import UserAPIClient from "./users";
import env from "../../config/environment";
import {inout} from "../../inout/inout";
import PhoneConfirmationAPIClient from "./phoneConfirmations";
import SessionAPIClient from "./sessions";
import ResponseStatus from "../../enums/responseStatus";
import {getRandomPhoneNumber} from "../../testUtils";
import GetUserResponseV1 = inout.GetUserResponseV1;
import CreateSessionResponseV1 = inout.CreateSessionResponseV1;

test('Should create user, session and then delete user', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const phoneConfirmationAPIClient = new PhoneConfirmationAPIClient(env.ApiDomain);
    const sessionAPIClient = new SessionAPIClient(env.ApiDomain);

    const phone = getRandomPhoneNumber();
    const password = "123";
    const phoneCountryCode = "RU";

    await phoneConfirmationAPIClient.create({phone, phoneCountryCode});
    const user = await userAPIClient.create({
        phone, password, phoneCountryCode,
        phoneCode: env.MockedConfirmationCode
    });

    if (!(user.data instanceof GetUserResponseV1)) {
        throw "User not created"
    }

    const globalSession = await sessionAPIClient.create({phoneAndPassword: {phone, phoneCountryCode, password}});

    if (!(globalSession.data instanceof CreateSessionResponseV1)) {
        throw "Global session not created"
    }
    const {data} = await userAPIClient.create({});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.password).toHaveLength(1);
    const deletedUser = await userAPIClient.delete(user.data.id, globalSession.data.accessToken);
    expect(deletedUser.status).toEqual(ResponseStatus.NoContent);
});
