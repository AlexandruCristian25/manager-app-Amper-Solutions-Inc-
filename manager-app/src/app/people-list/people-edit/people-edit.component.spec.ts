import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEditComponent } from './people-edit.component';

describe('PeopleEditComponent', () => {
  let component: PeopleEditComponent;
  let fixture: ComponentFixture<PeopleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleEditComponent]
    });
    fixture = TestBed.createComponent(PeopleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
