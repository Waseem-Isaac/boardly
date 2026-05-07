import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksBarChart } from './tasks-bar-chart';

describe('TasksBarChart', () => {
  let component: TasksBarChart;
  let fixture: ComponentFixture<TasksBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksBarChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksBarChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
