import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessCoreComponent } from './fitness-core.component';

describe('FitnessCoreComponent', () => {
  let component: FitnessCoreComponent;
  let fixture: ComponentFixture<FitnessCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
