import { Component, OnInit, SimpleChange } from "@angular/core";
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../const/blogpost';

@Component({
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.scss']
})
export class ConsumeComponent implements OnInit {
  blog$: Observable<BlogPost[]>;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blog$ = this.blogService.fetchAll();
  }
}