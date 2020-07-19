import { Injectable } from "@angular/core";
import { User } from '../const/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { }

  get jwt() {
    return localStorage.getItem('jawt');
  }

  register({ username = '', password = '' }) {
    return this.http.post<User>('/auth/register', { username, password }).pipe(shareReplay(), catchError((error) => of(error)));
  }

  login({ username = '', password = '' }) {
    return this.http.post<User>('/auth/login', { username, password }).pipe(shareReplay(), catchError((error) => of(error)));
  }

  authenticate(user) {
    this.storeJWT(user.token);
    this.user$.next(user);
  }

  isAuthenticated(): boolean {
    const user = this.user$.getValue();
    return user ? !!user.token : false;
  }

  storeJWT(token) {
    localStorage.setItem('jawt', token);
  }

  logout() {
    this.user$.next({ username: null, token: null });
    localStorage.removeItem('jawt');
    this.router.navigate(['/home']);
  }

  autologin() {
    return this.http.post<any>('/auth/autologin', {}).pipe(shareReplay(), catchError((error) => of(error)));
  }

}