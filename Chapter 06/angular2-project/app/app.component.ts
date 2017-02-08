import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <input type="text" [(ngModel)]="newComment">
    <button type="button" (click)="add(newComment)">Submit</button>
    <ul>
      <li *ngFor="#comment of comments">
      {{comment.title}}
      <button type="button" (click)="like(comment)">like</button>
      {{comment.likes}}
      </li>
    </ul>`
})
export class AppComponent {
    comments:Array<string>;

    constructor() {
        this.comments = [
          {title: 'First commemnt', likes: 0}
        ];
    }

    add(comment) {
        var commentObj = {title: comment, likes: 0};
        this.comments.unshift(commentObj);
    }

    like(comment) {
        comment.likes++
    }
}
