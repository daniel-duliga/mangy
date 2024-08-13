import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureCrafterComponent } from './adventure-crafter.component';

describe('AdventureCrafterComponent', () => {
  let component: AdventureCrafterComponent;
  let fixture: ComponentFixture<AdventureCrafterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureCrafterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureCrafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
