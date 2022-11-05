import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcrementComponent } from './imcrement.component';

describe('ImcrementComponent', () => {
  let component: ImcrementComponent;
  let fixture: ComponentFixture<ImcrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
