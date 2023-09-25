import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDefaultComponent } from './projects-default.component';

describe('ProjectsDefaultComponent', () => {
  let component: ProjectsDefaultComponent;
  let fixture: ComponentFixture<ProjectsDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDefaultComponent]
    });
    fixture = TestBed.createComponent(ProjectsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
