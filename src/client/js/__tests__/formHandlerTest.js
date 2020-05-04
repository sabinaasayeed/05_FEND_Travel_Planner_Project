import { handleSubmit } from "../formHandler";


describe("Check if the event exists", () => {

    test('test handleSubmit event is defined', () => {
        expect(handleSubmit).toBeInstanceOf(Function);
    });

});