import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../const/blogpost';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<BlogPost[]>('/blog/all');
  }
}
