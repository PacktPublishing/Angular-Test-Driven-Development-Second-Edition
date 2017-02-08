"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var members_service_stub_js_1 = require('./stub/members.service.stub.js');
var members_service_1 = require('../../app/services/members.service');
var mockData = {
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
describe('Given service should be defined and response HTTP request', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                members_service_1.MembersService,
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                },
            ],
        });
    });
    it('should initiate the member service', testing_1.inject([members_service_1.MembersService], function (membersService) {
        expect(membersService).toBeDefined();
    }));
    it('should return response when send HTTP request', testing_1.fakeAsync(testing_1.inject([testing_2.MockBackend, members_service_1.MembersService], function (backend, membersService) {
        backend.connections.subscribe(function (c) {
            c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: mockData })));
        });
        membersService.getAPIData().subscribe(function (res) {
            expect(res.json()).toEqual(mockData);
        });
    })));
});
describe('Given service will response for every method', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [{ provide: members_service_1.MembersService, useClass: members_service_stub_js_1.MembersServiceSpy }]
        });
    });
    it('should return data', testing_1.fakeAsync(testing_1.inject([members_service_1.MembersService], function (service) {
        service.getData();
        expect(service.members).toEqual(mockData);
    })));
    it('should return data', testing_1.fakeAsync(testing_1.inject([members_service_1.MembersService], function (service) {
        service.searchQuery('Thomas');
        expect(service.members.name).toBe('Demaryius Thomas');
    })));
    it('should return data', testing_1.fakeAsync(testing_1.inject([members_service_1.MembersService], function (service) {
        service.getPerson(2);
        expect(service.members.id).toBe(2);
    })));
});
//# sourceMappingURL=members.service.spec.js.map