import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessHeaderComponent } from './fitness-header.component';

describe('FitnessHeaderComponent', () => {
  let component: FitnessHeaderComponent;
  let fixture: ComponentFixture<FitnessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
