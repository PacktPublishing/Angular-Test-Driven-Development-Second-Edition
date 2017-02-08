"use strict";
var protractor_1 = require('protractor');
describe('Given views should flip through navigation in', function () {
    var view1, view2, view1Link, view2Link;
    beforeEach(function () {
        protractor_1.browser.get('view1');
        view1 = protractor_1.element(protractor_1.by.css('app-view1 #view1'));
        view2 = protractor_1.element(protractor_1.by.css('app-view2 #view2'));
        view1Link = protractor_1.element(protractor_1.by.linkText('View1'));
        view2Link = protractor_1.element(protractor_1.by.linkText('View2'));
    });
    it('View1 should load and visible initially', function () {
        expect(view1.isPresent()).toBeTruthy();
        expect(view2.isPresent()).toBeFalsy();
    });
    it('View1 should have body content as expected', function () {
        expect(view1.getText()).toEqual('I am view one component');
    });
    it('Should flipped to View2 and view2 should visible', function () {
        view2Link.click();
        expect(view2.isPresent()).toBeTruthy();
        expect(view1.isPresent()).toBeFalsy();
    });
    it('Should flipped to View2 and should have body content as expected', function () {
        view2Link.click();
        expect(view2.getText()).toEqual('I am view two component');
    });
    it('Should flipped to View1 again and should visible', function () {
        view1Link.click();
        expect(view1.isPresent()).toBeTruthy();
        expect(view2.isPresent()).toBeFalsy();
    });
});
//# sourceMappingURL=view.e2e-spec.js.map