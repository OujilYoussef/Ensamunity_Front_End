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
  posts: Array<PostModel> = [];

  constructor(private postService: PostService,private activateRoute: ActivatedRoute,private rooter: Router) {
    this.discussionId = this.activateRoute.snapshot.params.id;
    if(this.discussionId == null)
    {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
    }
    else
    {
      this.postService.getAllPostsByDiscussion(this.discussionId).subscribe(post => {
        this.posts = post;
      });
     this.reloadCurrentRoute();
    }
  }
  reloadCurrentRoute() {
      this.rooter.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.rooter.navigate([this.rooter.url]);
    });
  }
  ngOnInit(): void {
  }

}
