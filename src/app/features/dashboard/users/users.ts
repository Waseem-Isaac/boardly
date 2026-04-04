import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  protected taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe();
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
