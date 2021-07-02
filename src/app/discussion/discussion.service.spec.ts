import { TestBed } from '@angular/core/testing';

import { discussionService } from './discussion.service';

describe('discussionService', () => {
  let service: discussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(discussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
