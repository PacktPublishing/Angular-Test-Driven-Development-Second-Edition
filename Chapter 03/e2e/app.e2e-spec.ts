import { browser, element, by } from 'protractor';

describe('AppComponent Tests', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('Browser should have a defined title', () => {
        expect(browser.getTitle()).toEqual('Angular Karma');
    });

});
