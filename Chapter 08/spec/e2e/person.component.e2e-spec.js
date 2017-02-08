"use strict";
var protractor_1 = require('protractor');
describe('Given should test the search result in details view', function () {
    beforeEach(function () {
        protractor_1.browser.get('members');
        var searchButton = protractor_1.element(protractor_1.by.css('form button'));
        var searchBox = protractor_1.element(protractor_1.by.css('form input'));
        searchBox.sendKeys('Thomas');
        searchButton.click();
        var resultItem = protractor_1.element(protractor_1.by.linkText('Demaryius Thomas'));
        resultItem.click();
    });
    it('should be load the person details page', function () {
        var resultDetail = protractor_1.element(protractor_1.by.css('#personDetails'));
        expect(resultDetail.isDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=person.component.e2e-spec.js.map