import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  discussionId:number;
  username:string;
  posts: Array<PostModel> = [];

  constructor(private postService: PostService,private activateRoute: ActivatedRoute,private rooter: Router) {
    this.discussionId = this.activateRoute.snapshot.params.id;
    this.username = this.activateRoute.snapshot.params.name;

    this.rooter.routeReuseStrategy.shouldReuseRoute = () => false;
    if(this.discussionId != null)
    {
      this.postService.getAllPostsByDiscussion(this.discussionId).subscribe(post => {
        this.posts = post;
      });
    }
    else if(this.username != null)
    {
      this.postService.getAllPostsByUser(this.username).subscribe(post => {
        this.posts = post;
      });
    }
    else
    {
      this.postService.getAllPosts().subscribe(post => {
        this.posts = post;
      });
    }
  }

  ngOnInit(): void {
  }

}
