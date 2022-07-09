import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCheckComponent } from './detail-check.component';

describe('DetailCheckComponent', () => {
  let component: DetailCheckComponent;
  let fixture: ComponentFixture<DetailCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
