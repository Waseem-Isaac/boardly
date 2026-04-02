import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Task, TaskFormData } from "./models";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    return this.http.get<{ tasks: Task[] }>('/tasks.json').pipe(
      map((data) => data.tasks)
    );
  }

  getTaskById(id: string): Observable<Task | undefined> {
    return this.getTasks().pipe(
      map(tasks => tasks.find(task => task.id === id))
    );
  }

  createTask(taskData: TaskFormData): Observable<Task> {
    // In a real app, this would POST to an API
    // For now, we'll simulate the API response
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Simulate API delay
    return of(newTask);
  }

  updateTask(id: string, taskData: TaskFormData): Observable<Task> {
    // In a real app, this would PUT/PATCH to an API
    // For now, we'll simulate the API response
    const updatedTask: Task = {
      ...taskData,
      id,
      createdAt: new Date().toISOString(), // In real app, this would come from the existing task
      updatedAt: new Date().toISOString(),
    };
    
    // Simulate API delay
    return of(updatedTask);
  }

  deleteTask(id: string): Observable<void> {
    // In a real app, this would DELETE to an API
    // For now, we'll simulate the API response
    return of(void 0);
  }
}
