import { Routes } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'add',
    component: TaskAddComponent,
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent,
  }
];