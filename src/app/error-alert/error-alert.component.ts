import {Component} from '@angular/core'

@Component({
    selector: 'app-error-alert',
    template: `
    <div class="alert alert-danger">
      <div class="black-text">
      <strong>Error!</strong>
      <div>
    </div>
    `,
    styleUrls: ['./error-alert.component.css']
  })
export class ErrorAlertComponent {

}