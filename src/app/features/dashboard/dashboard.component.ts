import { Component } from '@angular/core';
import { StatisticsListComponent } from './statistics/statistics-list/statistics-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatisticsListComponent, TaskListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
