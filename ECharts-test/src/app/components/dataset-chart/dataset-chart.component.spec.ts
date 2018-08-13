import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetChartComponent } from './dataset-chart.component';

describe('DatasetChartComponent', () => {
  let component: DatasetChartComponent;
  let fixture: ComponentFixture<DatasetChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
