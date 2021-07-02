import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { discussionSideBarComponent } from './discussion-side-bar.component';

describe('discussionSideBarComponent', () => {
  let component: discussionSideBarComponent;
  let fixture: ComponentFixture<discussionSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [discussionSideBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(discussionSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
