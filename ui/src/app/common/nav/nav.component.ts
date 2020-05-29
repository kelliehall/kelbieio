import { Component, EventEmitter, Output } from "@angular/core";

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
  @Output() menuOpened = new EventEmitter();

  constructor() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.menuOpened.emit(this.showMenu);
  }

}
