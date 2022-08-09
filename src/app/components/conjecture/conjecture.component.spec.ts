import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjectureComponent } from './conjecture.component';

describe('ConjectureComponent', () => {
  let component: ConjectureComponent;
  let fixture: ComponentFixture<ConjectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
