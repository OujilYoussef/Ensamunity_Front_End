import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { discussionModel } from './discussion-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class discussionService {
  constructor(private http: HttpClient) { }

  getAlldiscussions(): Observable<Array<discussionModel>> {
    return this.http.get<Array<discussionModel>>('http://localhost:8080/api/Discussions');
  }

  creatediscussion(discussionModel: discussionModel): Observable<discussionModel> {
    return this.http.post<discussionModel>('http://localhost:8080/api/Discussions',
      discussionModel);
  }
}
