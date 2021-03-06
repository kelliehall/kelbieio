import { NgModule } from "@angular/core";
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  exports: [NavComponent]
})
export class CommonModule { }
