import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpecificationComponent } from './game-specification.component';

describe('GameSpecificationComponent', () => {
  let component: GameSpecificationComponent;
  let fixture: ComponentFixture<GameSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
