import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediscussionComponent } from './create-discussion.component';

describe('CreatediscussionComponent', () => {
  let component: CreatediscussionComponent;
  let fixture: ComponentFixture<CreatediscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatediscussionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatediscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
