const uuidV4 = require('uuid/v4');

export const toHexString = (bytes: Uint8Array): string => uuidV4({random: bytes});
