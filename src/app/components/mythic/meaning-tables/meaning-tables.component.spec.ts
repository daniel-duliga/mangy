import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningTablesComponent } from './meaning-tables.component';

describe('MeaningTablesComponent', () => {
  let component: MeaningTablesComponent;
  let fixture: ComponentFixture<MeaningTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeaningTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaningTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
