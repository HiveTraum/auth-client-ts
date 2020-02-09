export interface Environment {
    MockedConfirmationCode: string,
    ApiDomain: string
}

const env: Environment = {
    MockedConfirmationCode: process.env.MOCKED_CONFIRMATION_CODE,
    ApiDomain: process.env.API_DOMAIN
};

export default env;
