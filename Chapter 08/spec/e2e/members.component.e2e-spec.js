"use strict";
var protractor_1 = require('protractor');
describe('Given should test the search feature', function () {
    var searchBox, searchButton, searchResult;
    beforeEach(function () {
        protractor_1.browser.get('');
        protractor_1.element(protractor_1.by.linkText('Members')).click();
        searchButton = protractor_1.element(protractor_1.by.css('form button'));
        searchBox = protractor_1.element(protractor_1.by.css('form input'));
    });
    it('should have an input and search button', function () {
        expect(searchButton.isPresent()).toEqual(true);
        expect(searchButton.isPresent()).toEqual(true);
        searchResult = protractor_1.element.all(protractor_1.by.css('#searchList tbody tr'));
        expect(searchResult.count()).toBe(3);
    });
    it('There should be one item in search result', function () {
        searchBox.sendKeys('Thomas');
        searchButton.click().then(function () {
            searchResult = protractor_1.element.all(protractor_1.by.css('#searchList tbody tr'));
            expect(searchResult.count()).toBe(1);
        });
    });
});
//# sourceMappingURL=members.component.e2e-spec.js.map