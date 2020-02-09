enum Region {
    RU,
    US
}

const randomInt = (min: number, max: number) => min + Math.floor((max - min) * Math.random());

export const getRandomPhoneNumber = (region: Region = Region.RU) => {
    switch (region) {
        case Region.RU:
            return `+71${randomInt(100_000_000, 999_999_999)}`;
        case Region.US:
            return `+11${randomInt(100_000_000, 999_999_999)}`;
    }
};
