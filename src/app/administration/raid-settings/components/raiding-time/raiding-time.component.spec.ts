import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidingTimeComponent } from './raiding-time.component';

describe('RaidingDaysComponent', () => {
  let component: RaidingTimeComponent;
  let fixture: ComponentFixture<RaidingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
