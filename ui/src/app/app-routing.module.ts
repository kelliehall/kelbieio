import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogRoutesModule } from './blog/blog-routing.module';
import { AuthRoutesModule } from './auth/auth-routing.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BlogRoutesModule,
    AuthRoutesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
