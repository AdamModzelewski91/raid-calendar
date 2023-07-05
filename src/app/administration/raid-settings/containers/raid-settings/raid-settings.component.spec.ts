import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidSettingsComponent } from './raid-settings.component';

describe('RaidSettingsComponent', () => {
  let component: RaidSettingsComponent;
  let fixture: ComponentFixture<RaidSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
