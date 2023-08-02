import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTabelListComponent } from './member-tabel-list.component';

describe('MemberTabelComponent', () => {
  let component: MemberTabelListComponent;
  let fixture: ComponentFixture<MemberTabelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTabelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberTabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
