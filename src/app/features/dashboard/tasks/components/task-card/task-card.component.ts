import { Component, input } from '@angular/core';
import { Task } from '../../models';
import { DueDatePipe } from '../../../../../shared/pipes/due-date.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [DueDatePipe, NgClass ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  isOverdue(task: Task): boolean {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    return dueDate < today && task.status !== 'done';
  }
}
