import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateCheckComponent } from './fate-check.component';

describe('FateCheckComponent', () => {
  let component: FateCheckComponent;
  let fixture: ComponentFixture<FateCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FateCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
