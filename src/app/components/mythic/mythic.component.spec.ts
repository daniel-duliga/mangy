import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythicComponent } from './mythic.component';

describe('MythicComponent', () => {
  let component: MythicComponent;
  let fixture: ComponentFixture<MythicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MythicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
