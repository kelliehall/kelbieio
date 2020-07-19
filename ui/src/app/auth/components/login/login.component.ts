import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: any;

  constructor(private authService: AuthService,
    private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)]))
    });

    if (this.authService.jwt) {
      this.authService.autologin().subscribe(res => {
        if (!res['error']) {
          this.authService.authenticate(res);
          this.router.navigate(['/home'])
        }
      });
    }
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home'])
    }
  }

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login(this.loginForm.getRawValue()).subscribe((res) => {
      // TODO : DISPLAY ERROR
      if (!res['error']) {
        this.authService.authenticate(res);
        this.router.navigate(['/home'])
        this.error = null;
      } else {
        this.error = res;
      }
    });
  }

}
