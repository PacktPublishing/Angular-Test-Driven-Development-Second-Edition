import { Component, Output, EventEmitter } from '@angular/core';

import { MembersService, Person } from '../services/members.service';

@Component({
  selector: 'app-search',
  moduleId: module.id,
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  query: string;
  memberList: Array<Person> = [];
  @Output() searchResult: EventEmitter<any> = new EventEmitter();

  constructor(public membersService: MembersService) {

  }

  search() {
    this.doSearch();
  }

  doSearch(): void {
    this.membersService.searchQuery(this.query)
    .then(results => {
      this.memberList = results;
      this.searchResult.emit(this.memberList);
    });
  }

}
