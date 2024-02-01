import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  ngOnInit():void {
  }

  slogan :string = 'You one Stop for everything';
  getSlogan() {
    return 'This is the getSlogan methods'
  }
}

