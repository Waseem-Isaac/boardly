import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFormComponent } from '../../../shared/components/task-form/task-form.component';
import { TaskService } from '../task.service';
import { TaskFormData } from '../../../core/models';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  private taskService = inject(TaskService);
  private router = inject(Router);

  isSubmitting = false;
  errorMessage = '';

  onFormSubmit(taskData: TaskFormData): void {
    this.isSubmitting = true;
    this.errorMessage = '';

    this.taskService.createTask(taskData).subscribe({
      next: (task) => {
        console.log('Task created successfully:', task);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error creating task:', error);
        this.errorMessage = 'Failed to create task. Please try again.';
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
