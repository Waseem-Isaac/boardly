import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardPlaceholder } from './analytics-card-placeholder';

describe('AnalyticsCardPlaceholder', () => {
  let component: AnalyticsCardPlaceholder;
  let fixture: ComponentFixture<AnalyticsCardPlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCardPlaceholder],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsCardPlaceholder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
