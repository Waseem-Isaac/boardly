import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent,
  },
  {
    path: 'tasks/edit/:id',
    component: TaskEditComponent,
  },
];
