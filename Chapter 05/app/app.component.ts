import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: `<h3>MY Items</h3><ul><li *ngFor="let item of items">{{ item }}</li></ul>`
})
export class AppComponent {
  items:Array<string>;

  constructor() {
    this.items = ['test','execute','refactor'];
  }

  add(item) {
    this.items.push(item);
  }
};
