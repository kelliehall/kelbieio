import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: any;

  constructor(private authService: AuthService,
    private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)]))
    });
  }

  get username() {
    return this.registerForm.get('username')
  }

  get password() {
    return this.registerForm.get('password');
  }

  register() {
    this.authService.register(this.registerForm.getRawValue()).subscribe((res) => {
      if (!res['error']) {
        this.router.navigate(['auth/login']);
      } else {
        this.error = res;
      }
    });
  }
}
