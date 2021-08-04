import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsAnalyticsComponent } from './ads-analytics.component';

describe('AdsAnalyticsComponent', () => {
  let component: AdsAnalyticsComponent;
  let fixture: ComponentFixture<AdsAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
