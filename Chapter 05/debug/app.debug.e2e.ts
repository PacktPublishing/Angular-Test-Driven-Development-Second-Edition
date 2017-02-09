import { browser, element, by } from 'protractor';

describe('AppComponent Tests', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('Test spec for debug and play', () => {
        browser.pause();
        //browser.debugger();

        // There is not element with the id=“my_id”, so this will fail the test
        expect(element(by.id('my_id')).getText()).toEqual('my text')
    });

});
