import { Component, OnInit } from '@angular/core';
import { discussionModel } from '../discussion-response';
import { discussionService } from '../discussion.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-discussions',
  templateUrl: './list-discussions.component.html',
  styleUrls: ['./list-discussions.component.css']
})
export class ListdiscussionsComponent implements OnInit {

  discussions: Array<discussionModel>;
  constructor(private discussionService: discussionService) { }

  ngOnInit() {
    this.discussionService.getAlldiscussions().subscribe(data => {
      this.discussions = data;
    }, error => {
      throwError(error);
    })
  }
}