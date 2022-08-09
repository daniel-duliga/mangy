import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcInteractionEmulatorComponent } from './npc-interaction-emulator.component';

describe('NpcInteractionEmulatorComponent', () => {
  let component: NpcInteractionEmulatorComponent;
  let fixture: ComponentFixture<NpcInteractionEmulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcInteractionEmulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcInteractionEmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
