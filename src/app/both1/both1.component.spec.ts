import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Both1Component } from './both1.component';

describe('Both1Component', () => {
  let component: Both1Component;
  let fixture: ComponentFixture<Both1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Both1Component]
    });
    fixture = TestBed.createComponent(Both1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
