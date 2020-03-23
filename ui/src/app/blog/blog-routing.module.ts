import { ConsumeComponent } from "./consume/consume.component";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'blog/view', component: ConsumeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutesModule { }
