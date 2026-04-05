/**
 * Team members view displaying user avatars and task assignments.
 * SMART component (loads data via TaskService)
 */
import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  protected taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe();
  }

  getAvatarInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
