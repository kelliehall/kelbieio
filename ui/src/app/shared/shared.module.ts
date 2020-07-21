import { NgModule } from "@angular/core";
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule { }
