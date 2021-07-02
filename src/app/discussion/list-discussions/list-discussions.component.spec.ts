import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiscussionsComponent } from './list-discussions.component';

describe('ListDiscussionsComponent', () => {
  let component: ListDiscussionsComponent;
  let fixture: ComponentFixture<ListDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDiscussionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
