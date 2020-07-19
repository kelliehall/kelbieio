import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent, LoginComponent } from './components';

const routes = [
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule { }