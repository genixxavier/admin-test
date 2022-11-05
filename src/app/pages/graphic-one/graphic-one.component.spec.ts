import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicOneComponent } from './graphic-one.component';

describe('GraphicOneComponent', () => {
  let component: GraphicOneComponent;
  let fixture: ComponentFixture<GraphicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
