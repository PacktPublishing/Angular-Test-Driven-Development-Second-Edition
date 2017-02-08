import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h3>My Items</h3><ul><li *ngFor="#item of items">{{ item }}</li></ul>`
})

export class AppComponent {
    items:Array<string>;

    constructor() {
        this.items = ['test','execute','refactor'];
    }

    add(item) {
        this.items.push(item);
    }
}
