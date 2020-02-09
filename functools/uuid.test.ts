import {toHexString} from "./uuid";

const stringExample = "9fed0255-88a7-44f4-859e-7da95a3139f4";
const bytesExample = new Uint8Array([159, 237, 2, 85, 136, 167, 68, 244, 133, 158, 125, 169, 90, 49, 57, 244]);

test("To string", () => {
    expect(toHexString(bytesExample)).toEqual(stringExample);
});
