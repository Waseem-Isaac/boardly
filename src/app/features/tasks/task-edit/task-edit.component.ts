import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../../../shared/components/task-form/task-form.component';
import { TaskService } from '../task.service';
import { Task, TaskFormData } from '../../../core/models';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  task?: Task;
  isLoading = true;
  isSubmitting = false;
  errorMessage = '';

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.loadTask(taskId);
    } else {
      this.errorMessage = 'No task ID provided';
      this.isLoading = false;
    }
  }

  private loadTask(id: string): void {
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        if (task) {
          this.task = task;
        } else {
          this.errorMessage = 'Task not found';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading task:', error);
        this.errorMessage = 'Failed to load task. Please try again.';
        this.isLoading = false;
      }
    });
  }

  onFormSubmit(taskData: TaskFormData): void {
    if (!this.task) return;

    this.isSubmitting = true;
    this.errorMessage = '';

    this.taskService.updateTask(this.task.id, taskData).subscribe({
      next: (updatedTask) => {
        console.log('Task updated successfully:', updatedTask);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error updating task:', error);
        this.errorMessage = 'Failed to update task. Please try again.';
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  onFormCancel(): void {
    this.router.navigate(['/tasks']);
  }
}
