import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidFormComponent } from './raid-form.component';

describe('RaidFormComponent', () => {
  let component: RaidFormComponent;
  let fixture: ComponentFixture<RaidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
