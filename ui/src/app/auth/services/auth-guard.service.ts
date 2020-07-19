import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      if (this.auth.jwt) {
        this.auth.autologin().subscribe(res => {
          if (!res['error']) {
            this.auth.authenticate(res);
            return true;
          }
        });
      } else {
        this.router.navigate(['login']);
        return false
      }
    }
    return true;
  }
}