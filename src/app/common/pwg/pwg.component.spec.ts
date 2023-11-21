import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwgComponent } from './pwg.component';

describe('PwgComponent', () => {
  let component: PwgComponent;
  let fixture: ComponentFixture<PwgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwgComponent]
    });
    fixture = TestBed.createComponent(PwgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
