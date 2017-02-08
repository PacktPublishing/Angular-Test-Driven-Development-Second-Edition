import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MembersService {
  constructor(private http:Http) {

  }

  getAPIData() {
    return this.http.get('app/data/people.json');
  }

  getData() {
    return this.getAPIData()
      .toPromise()
      .then(response => response.json());
  }

  searchQuery(q:string) {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }
    return this.getData()
      .then(data => {
      let results:any = [];
      data.map(item => {
        if (JSON.stringify(item).toLowerCase().includes(q)) {
          results.push(item);
        }
      });
      return results;
    });
  }

  getPerson(id:number) {
    return this.getData()
      .then(data => data.find(member => member.id === id));
  }

}

export class Person {
  id:number;
  name:string;
  phone:string;
  address:Address;

  constructor(obj?:any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}

export class Address {
  street:string;
  city:string;
  state:string;
  zip:string;

  constructor(obj?:any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}
