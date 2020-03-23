import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsumeComponent } from './consume/consume.component';
import { BlogRoutesModule } from './blog-routing.module';
import { BlogService } from './services/blog.service';

@NgModule({
  imports: [
    BrowserModule,
    BlogRoutesModule
  ],
  declarations: [
    ConsumeComponent
  ],
  providers: [
    BlogService
  ],
})
export class BlogModule { }