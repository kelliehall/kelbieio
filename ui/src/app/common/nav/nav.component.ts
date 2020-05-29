import { Component } from "@angular/core";

@Component({
  selector: 'kelbie-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  showMenu = true;
  links = [
    { label : 'Home', path: '/home'},
    { label : 'Posts', path: '/blog/view'},
  ];

  constructor() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
