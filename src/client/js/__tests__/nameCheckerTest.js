import { checkForName } from "../nameChecker";

describe("Input Name Check Warning", () => {

    test("it checks for valid url", () => {
        global.alert = jest.fn();

        const validUrls = [
            "http://www.google-com.123.com",
            "https://www.google.com",
            "https://www.yahoo.com"
        ];

        validUrls.forEach(url => {
            expect(checkForName(url)).toBe(true);

        });
    });

    test("it checks for invalid url", () => {
        global.alert = jest.fn();

        const invalidUrls = [
            "http://www.google-com.123",
            "https#//www.google.com",
            "abc://www.yahoo.com"
        ];

        invalidUrls.forEach(url => {
            expect(checkForName(url)).toBe(false);

        });
    });
});