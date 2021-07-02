import { Component, OnInit } from '@angular/core';
import { DiscussionService } from 'src/app/discussion/discussion.service';
import { DiscussionModel } from 'src/app/discussion/discussion-response';

@Component({
  selector: 'app-discussion-side-bar',
  templateUrl: './discussion-side-bar.component.html',
  styleUrls: ['./discussion-side-bar.component.css']
})
export class discussionSideBarComponent implements OnInit {
  discussions: Array<DiscussionModel> = [];
  displayViewAll: boolean;

  constructor(private discussionService: DiscussionService) {
    this.discussionService.getAlldiscussions().subscribe(data => {
      if (data.length > 3) {
        this.discussions = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.discussions = data;
      }
    });
  }

  ngOnInit(): void { }

}
