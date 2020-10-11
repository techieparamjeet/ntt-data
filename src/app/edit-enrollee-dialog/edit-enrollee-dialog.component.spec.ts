import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnrolleeDialogComponent } from './edit-enrollee-dialog.component';

describe('EditEnrolleeDialogComponent', () => {
  let component: EditEnrolleeDialogComponent;
  let fixture: ComponentFixture<EditEnrolleeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnrolleeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnrolleeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
