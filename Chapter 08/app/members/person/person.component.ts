import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MembersService, Person } from '../../services/members.service';


@Component({
  selector: 'app-person',
  moduleId: module.id,
  templateUrl: 'person.component.html',
  styleUrls: ['../members.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;
  constructor(public membersService: MembersService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = +params['id'];
       this.membersService.getPerson(id).then(person => {
         this.person = person;
       });
     });
  }

}
