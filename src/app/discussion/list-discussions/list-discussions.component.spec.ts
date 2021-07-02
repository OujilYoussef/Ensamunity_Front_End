import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdiscussionsComponent } from './list-discussions.component';

describe('ListdiscussionsComponent', () => {
  let component: ListdiscussionsComponent;
  let fixture: ComponentFixture<ListdiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListdiscussionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
