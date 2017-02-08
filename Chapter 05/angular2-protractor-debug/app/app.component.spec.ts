import {AppComponent} from "./app.component";

describe('AppComponent Tests', () => {
    let app:AppComponent;

    beforeEach(() => {
        app = new AppComponent();
    });

    it('Should define a list object', () => {
        expect(app.items).toBeDefined();
    });

    it('Should have 3 items in list', () => {
        expect(app.items.length).toBe(3);
    });

    it('List items should be as expected', () => {
        expect(app.items).toEqual(['test','execute','refactor']);
    });

    describe('Testing add method', () => {

        beforeEach(() => {
            app.add('new-item');
        });

        it('Should have 4 items in list', () => {
            expect(app.items.length).toBe(4);
        });

        it('Should add a new item at the end of list', () => {
            var lastIndexOfList = app.items.length - 1;
      			expect(app.items[lastIndexOfList]).toEqual('new-item');
        });
    });
});
