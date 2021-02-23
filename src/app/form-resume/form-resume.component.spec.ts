import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResumeComponent } from './form-resume.component';

describe('FormResumeComponent', () => {
  let component: FormResumeComponent;
  let fixture: ComponentFixture<FormResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
