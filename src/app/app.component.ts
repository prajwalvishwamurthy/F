import { Component } from '@angular/core';

@Component({
  // selector: .app-root // this is class type selector 
  // selector : [app-root] // this is HTML attribute type
  selector: 'app-root', // this HTML tag type 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleAngular';
}


/* 
 we can make create selector in three ways 

 1. using HTML Tag 
 eg : selector: 'app-root', eg <app-root>
 2. using HTML Attributes 
 eg <div app-root> and in selector use like [app-root]
 3. using like css class 
 eg, in selector use like .app-root and <div class=app-root>
*/