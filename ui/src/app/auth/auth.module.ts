import { NgModule } from "@angular/core";
import { LoginComponent, RegisterComponent } from './components';
import { RouterModule } from '@angular/router';
import { AuthGuardService, AuthService } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  exports: []
})
export class AuthModule { }
