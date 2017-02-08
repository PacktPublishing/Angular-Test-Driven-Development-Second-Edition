import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembersService, Person } from '../services/members.service';

@Component({
  selector: 'app-member',
  moduleId: module.id,
  templateUrl: 'members.component.html',
  styleUrls: ['members.component.css']
})
export class MembersComponent implements OnInit {
  memberList: Array<Person> = [];
  query: string;

  constructor(public membersService: MembersService, private router:Router) {

  }

  ngOnInit() {
    this.getMembers();
  }

  onSearch(searchResult) {
    this.memberList = searchResult;
  }

  viewDetails(id:number) {
    this.router.navigate(['/person', id]);
  }

  getMembers() {
    this.membersService.getData()
    .then(data => {
      data.map(item => {
        this.memberList.push(item);
      });
    })
    return this.memberList;
  }

}
