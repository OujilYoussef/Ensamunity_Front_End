import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DiscussionModel } from '../discussion-response';
import { Router } from '@angular/router';
import { DiscussionService } from '../discussion.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.css']
})
export class CreatediscussionComponent implements OnInit {
  creatediscussionForm: FormGroup;
  discussionModel: DiscussionModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private discussionService: DiscussionService) {
    this.creatediscussionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.discussionModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  creatediscussion() {
    this.discussionModel.name = this.creatediscussionForm.get('title')
      .value;
    this.discussionModel.description = this.creatediscussionForm.get('description')
      .value;
    this.discussionService.creatediscussion(this.discussionModel).subscribe(data => {
      this.router.navigateByUrl('/list-discussions');
    }, error => {
      throwError(error);
    })
  }
}
