import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildPanelComponent } from './guild-panel.component';

describe('GuildPanelComponent', () => {
  let component: GuildPanelComponent;
  let fixture: ComponentFixture<GuildPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
