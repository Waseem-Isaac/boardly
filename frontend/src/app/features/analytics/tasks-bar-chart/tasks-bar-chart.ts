import { Component, computed, input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { JsonPipe } from '@angular/common';
import { AnalyticsCardPlaceholder } from '../components/analytics-card-placeholder/analytics-card-placeholder';

@Component({
  selector: 'app-tasks-bar-chart',
  imports: [BaseChartDirective , AnalyticsCardPlaceholder],
  templateUrl: './tasks-bar-chart.html',
  styleUrl: './tasks-bar-chart.scss',
})
export class TasksBarChart {
  // Grouped bar: X-axis = Status, 3 bars per group = Priority (Low / Medium / High)

  tasks = input<any[]>([]);

  barChartData = computed<ChartData<'bar'>>(() => {
    const statuses = ['todo', 'in_progress', 'done'] as const;
    type Priority = 'low' | 'medium' | 'high';

    const count = (status: (typeof statuses)[number], priority: Priority) =>
      this.tasks()?.filter((t) => t.status === status && t.priority === priority).length;

    return {
      labels: ['To Do', 'In Progress', 'Done'],
      datasets: [
        {
          label: 'Low',
          data: statuses.map((s) => count(s, 'low')),
          backgroundColor: 'rgba(56, 142, 60, 0.75)',
          borderColor: '#388E3C',
          borderWidth: 1,
          borderRadius: 4,
          barThickness: 32,
          maxBarThickness: 28,
        },
        {
          label: 'Medium',
          data: statuses.map((s) => count(s, 'medium')),
          backgroundColor: 'rgba(245, 124, 0, 0.75)',
          borderColor: '#F57C00',
          borderWidth: 1,
          borderRadius: 4,
          barThickness: 32,
          maxBarThickness: 28,

        },
        {
          label: 'High',
          data: statuses.map((s) => count(s, 'high')),
          backgroundColor: 'rgba(211, 47, 47, 0.75)',
          borderColor: '#D32F2F',
          borderWidth: 1,
          borderRadius: 4,
          barThickness: 32,
          maxBarThickness: 28,
        },
      ],
    };
  });

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#424242', font: { size: 11 }, boxWidth: 12, boxHeight: 12, padding: 20 } },
      title: {
        display: true,
        align: 'start',
        font: { size: 15, weight: 'bold' },
        color: '#212121',
        padding: { bottom: 64 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label} priority: ${ctx.parsed.y} task(s)`,
        },
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: { display: false },
        grid: { display: false },
        title: { display: false },
        border: { display: false },
      },
    },
  };

  readonly barChartType = 'bar' as const;

  
  get hasChartData(): boolean {
    return this.barChartData().datasets.some((ds) => ds.data.some((value: any) => value > 0));
  }
}
