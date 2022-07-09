import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosFactorComponent } from './chaos-factor.component';

describe('ChaosFactorComponent', () => {
  let component: ChaosFactorComponent;
  let fixture: ComponentFixture<ChaosFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaosFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaosFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
