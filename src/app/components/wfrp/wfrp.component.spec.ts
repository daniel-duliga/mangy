import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfrpComponent } from './wfrp.component';

describe('WfrpComponent', () => {
  let component: WfrpComponent;
  let fixture: ComponentFixture<WfrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
