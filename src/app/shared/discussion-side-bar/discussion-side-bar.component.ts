import { Component, OnInit } from '@angular/core';
import { discussionService } from 'src/app/discussion/discussion.service';
import { discussionModel } from 'src/app/discussion/discussion-response';

@Component({
  selector: 'app-discussion-side-bar',
  templateUrl: './discussion-side-bar.component.html',
  styleUrls: ['./discussion-side-bar.component.css']
})
export class discussionSideBarComponent implements OnInit {
  discussions: Array<discussionModel> = [];
  displayViewAll: boolean;

  constructor(private discussionService: discussionService) {
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
