import { handleSubmit } from "../formHandler";
import { handleSave } from "../formHandler";



describe("Check if the event exists", () => {

    test('test handleSubmit event is defined', () => {
        expect(handleSubmit).toBeInstanceOf(Function);
    });

    test('test handleSave event is defined', () => {
        expect(handleSave).toBeInstanceOf(Function);
    });



});