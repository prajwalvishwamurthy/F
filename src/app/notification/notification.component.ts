import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class='alert alert-success'><p>this website uses cookies to provide better user experience</div>`,
  styles : ['.notification-div { margin :10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align:center;}', 'p {font-size :20px}']
})
export class NotificationComponent {

}
 