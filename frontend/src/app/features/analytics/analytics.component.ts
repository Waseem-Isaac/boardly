/**
 * Analytics dashboard displaying task statistics with grouped bar charts.
 * SMART component (fetches data, contains business logic)
 */
import { Component, effect, inject } from '@angular/core';
import { TasksService } from '../board/tasks.service';
import { StatisticsListComponent } from "../statistics/statistics-list/statistics-list.component";
import { TasksBarChart } from "./tasks-bar-chart/tasks-bar-chart";
import { AnalyticsCardPlaceholder } from './components/analytics-card-placeholder/analytics-card-placeholder';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-analytics',
  imports: [StatisticsListComponent, TasksBarChart , AnalyticsCardPlaceholder, MatFormField, MatSelectModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent  {
  taskService = inject(TasksService);
  boardsService = inject(BoardService);
  activeBoard = this.boardsService.activeBoard;
  boards = this.boardsService.boards;

  constructor() {
    this.boardsService.loadBoards().subscribe();

    effect(() => {
       this.taskService.loadTasks().subscribe();
    });
  }


  onBoardChange(boardId: string): void {
    const board = this.boards().find((b) => b._id === boardId);
    if (board) this.boardsService.setActiveBoard(board);
  }
}
