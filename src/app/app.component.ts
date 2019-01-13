import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Alerts!</h1>

    <input [(ngModel)]='username'>
    <button type='button' class='btn btn-primary' (click)='resetIfNotEmpty()'></button>

    <p>{{username}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';

  resetIfNotEmpty() {
    if(!!this.username) {
      this.username = '';
    }
  }
}
