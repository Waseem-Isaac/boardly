import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Task, TaskFormData } from '../../models';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task?: Task;
  @Input() submitButtonText = 'Submit';
  @Output() formSubmit = new EventEmitter<TaskFormData>();
  @Output() formCancel = new EventEmitter<void>();

  taskForm!: FormGroup;

  statusOptions = [
    { value: 'todo', label: 'To Do' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
  ];

  priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      title: [this.task?.title || '', [Validators.required, Validators.minLength(3)]],
      description: [this.task?.description || '', [Validators.required]],
      status: [this.task?.status || 'todo', [Validators.required]],
      priority: [this.task?.priority || 'medium', [Validators.required]],
      dueDate: [this.task?.dueDate ? new Date(this.task.dueDate + 'T00:00:00') : null, [Validators.required]],
      assignee: this.fb.group({
        id: [this.task?.assignee?.id || ''],
        name: [this.task?.assignee?.name || '', [Validators.required]],
        avatar: [this.task?.assignee?.avatar || ''],
        email: [this.task?.assignee?.email || '', [Validators.required, Validators.email]]
      }),
      tags: [this.task?.tags || []]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValue = { ...this.taskForm.value };
      // Convert Date object back to ISO date string (YYYY-MM-DD)
      if (formValue.dueDate instanceof Date) {
        const d = formValue.dueDate;
        formValue.dueDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      }
      this.formSubmit.emit(formValue);
    } else {
      this.taskForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.taskForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'This field is required';
    }
    if (field?.hasError('minlength')) {
      return `Minimum length is ${field.errors?.['minlength'].requiredLength}`;
    }
    if (field?.hasError('email')) {
      return 'Invalid email format';
    }
    return '';
  }
}
