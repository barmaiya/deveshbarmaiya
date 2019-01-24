import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from "rxjs";
import { Post } from "../models/post.model"


@Injectable({
  providedIn: 'root'
})
export class PostsService {
 private posts : Post[]=[];
 private postsUpdated = new Subject<Post[]>();

  constructor(private http : HttpClient) { 
    
  }

 public getPost(){
    let url = "http://localhost:3000/api/post/";
    return this.http.get(url);
  }

  addPost(title:String, content:String){
    let url = "http://localhost:3000/api/post/";
    var data ={"title" : title, "content" : content};
    return this.http.post(url,data);

  }

  deletePost(postId:String){
    let url = "http://localhost:3000/api/post/" + postId;
     this.http.delete(url).subscribe(()=>{
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
    
  }

}
