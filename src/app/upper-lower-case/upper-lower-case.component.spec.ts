import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperLowerCaseComponent } from './upper-lower-case.component';

describe('UpperLowerCaseComponent', () => {
  let component: UpperLowerCaseComponent;
  let fixture: ComponentFixture<UpperLowerCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperLowerCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperLowerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
