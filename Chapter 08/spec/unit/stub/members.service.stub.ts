
import { Component, Directive, Injectable, Input } from '@angular/core';

export class MembersServiceSpy {
  members = {
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

  getData = jasmine.createSpy('getData').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

  getPerson = jasmine.createSpy('getPerson').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

  searchQuery = jasmine.createSpy('searchQuery').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

}
