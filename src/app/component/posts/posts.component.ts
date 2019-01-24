import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from '../../service/posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: any = [];
  @ViewChild('txtPost') txtPost: ElementRef;
  @ViewChild('txtTitle') txtTitle: ElementRef;

  constructor(private _service: PostsService) { }

  ngOnInit() {
   this.getPost();
  }

  public getPost() {
    this._service.getPost()
      .subscribe((data: any) => {
        this.posts = data;

      })
  }

  addPost() {
    this._service.addPost(this.txtTitle.nativeElement.value,this.txtPost.nativeElement.value).subscribe();
    this.getPost();
    console.log(this.txtPost.nativeElement.value);
  }


  deletePost(postId : String) {
    this._service.deletePost(postId);
    this.getPost();
    console.log(postId);

  }

}
