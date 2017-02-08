"use strict";
var MembersServiceSpy = (function () {
    function MembersServiceSpy() {
        var _this = this;
        this.members = {
            "id": 2,
            "name": "Demaryius Thomas",
            "phone": "(720) 213-9876",
            "address": {
                "street": "5555 Marion Street",
                "city": "Denver",
                "state": "CO",
                "zip": "80202"
            }
        };
        this.getData = jasmine.createSpy('getData').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
        this.getPerson = jasmine.createSpy('getPerson').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
        this.searchQuery = jasmine.createSpy('searchQuery').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
    }
    return MembersServiceSpy;
}());
exports.MembersServiceSpy = MembersServiceSpy;
//# sourceMappingURL=members.service.stub.js.map