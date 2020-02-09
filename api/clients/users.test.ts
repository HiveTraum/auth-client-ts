import {inout} from "../../inout/inout";

import UserAPIClient from "./users";
import PhoneConfirmationAPIClient from "./phoneConfirmations";
import env from "../../config/environment";
import {getRandomPhoneNumber} from "../../testUtils";


test('Create user with empty request data', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const {data} = await userAPIClient.create({});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.password).toHaveLength(1);
});

test('Create user with password only', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const {data} = await userAPIClient.create({password: "123"});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.errors).toHaveLength(1);
});

test('Create user with incorrect phone', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const {data} = await userAPIClient.create({password: "123", phone: "123"});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.phone).toHaveLength(1);
});

test('Create user with correct phone and without country code', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const phone = getRandomPhoneNumber();
    const {data} = await userAPIClient.create({password: "123", phone});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.phone).toHaveLength(1);
});

test('Create user with correct phone without confirmation code', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const phone = getRandomPhoneNumber();
    const {data} = await userAPIClient.create({password: "123", phone, phoneCountryCode: "RU"});
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.phone).toHaveLength(1);
});

test('Create user with correct phone and incorrect confirmation code', async () => {
    const userAPIClient = new UserAPIClient(env.ApiDomain);
    const phone = getRandomPhoneNumber();
    await new PhoneConfirmationAPIClient(env.ApiDomain).create({phone, phoneCountryCode: "RU"});
    const {data} = await userAPIClient.create({
        password: "123",
        phone: "71234567890",
        phoneCountryCode: "RU",
        phoneCode: "654321"
    });
    expect(data).toBeInstanceOf(inout.CreateUserBadRequestV1);
    const badRequestResponseV1 = data as inout.CreateUserBadRequestV1;
    expect(badRequestResponseV1.phone).toHaveLength(1);
});
