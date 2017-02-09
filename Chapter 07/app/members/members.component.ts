import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import { Person } from './person/person.component';

@Component({
  selector: 'app-member',
  moduleId: module.id,
  templateUrl: 'members.component.html',
  styleUrls: ['members.component.css']
})
export class MembersComponent implements OnInit {
  memberList: Array<Person> = [];
  query: string;

  constructor(private http:Http, private router:Router) {

  }

  ngOnInit() {
    //this.getMembers();
    this.search();
  }

  viewDetails(id:number) {
    this.router.navigate(['/person', id]);
  }

  getMembers() {
    this.getData()
    .then(data => {
      data.map(item => {
        this.memberList.push(item);
      });
    })
    return this.memberList;
  }

  getData() {
    return this.http.get('app/data/people.json')
      .toPromise()
      .then(response => response.json());
  }

  search(): void {
    this.searchQuery(this.query)
    .then(results => this.memberList = results);
  }

  searchQuery(q:string) {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }
    return this.getData()
      .then(data => {
      let results:Array<Person> = [];
      data.map(item => {
        if (JSON.stringify(item).toLowerCase().includes(q)) {
          results.push(item);
        }
      });
      return results;
    });
  }
}
