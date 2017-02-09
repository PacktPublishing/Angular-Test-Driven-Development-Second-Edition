import { browser, element, by } from 'protractor';

describe('AppComponent Tests', () => {

    var todoListItems = element.all(by.css('li'));

    beforeEach(() => {
        browser.get('/');
    });

    it('Browser should have a defined title', () => {
        expect(browser.getTitle()).toEqual('Angular Protractor');
    });

    it('Should get the number of items as defined in item object', () => {
        expect(todoListItems.count()).toBe(3);
    });

    it('Should get the first item text as defined', () => {
        expect(todoListItems.first().getText()).toEqual('test');
    });

    it('Should get the last item text as defined', () => {
        expect(todoListItems.last().getText()).toEqual('refactor');
    });

});
