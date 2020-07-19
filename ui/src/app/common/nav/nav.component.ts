import { Component, EventEmitter, Output } from "@angular/core";
import { AuthService } from '../../auth/services';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../auth/const/user';

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
  user$: BehaviorSubject<User> = new BehaviorSubject(null);

  @Output() menuOpened = new EventEmitter();

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.menuOpened.emit(this.showMenu);
  }

}
