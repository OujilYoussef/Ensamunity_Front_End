import { Component, OnInit } from '@angular/core';
import { DiscussionModel } from '../discussion-response';
import { DiscussionService } from '../discussion.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-discussions',
  templateUrl: './list-discussions.component.html',
  styleUrls: ['./list-discussions.component.css']
})
export class ListdiscussionsComponent implements OnInit {

  discussions: Array<DiscussionModel>;
  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
    this.discussionService.getAlldiscussions().subscribe(data => {
      this.discussions = data;
    }, error => {
      throwError(error);
    })
  }
}
