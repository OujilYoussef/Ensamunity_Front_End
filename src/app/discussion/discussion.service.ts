import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscussionModel } from './discussion-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  constructor(private http: HttpClient) { }

  getAlldiscussions(): Observable<Array<DiscussionModel>> {
    return this.http.get<Array<DiscussionModel>>('http://localhost:8081/api/Discussions');
  }

  creatediscussion(discussionModel: DiscussionModel): Observable<DiscussionModel> {
    return this.http.post<DiscussionModel>('http://localhost:8081/api/Discussions',
      discussionModel);
  }
}
