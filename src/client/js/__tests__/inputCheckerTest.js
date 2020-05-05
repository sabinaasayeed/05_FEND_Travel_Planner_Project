import { checkForInput } from "../inputChecker";
import { isFutureDate } from "../inputChecker";

describe("Input Name Check Warning", () => {

    test("it checks for Invalid input", () => {
        global.alert = jest.fn();
        expect(checkForInput('paris', '2020-05-05', '2020-05-07')).toBe(0);

    });


    test('Next year is a Future date = true', () => {
        global.alert = jest.fn();
        expect(isFutureDate('12.12.2021', Date.now())).toBe(true);
    });


});