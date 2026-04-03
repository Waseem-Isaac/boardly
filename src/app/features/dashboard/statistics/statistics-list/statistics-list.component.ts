import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatisticCardComponent } from '../components/statistic-card/statistic-card.component';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-statistics-list',
  imports: [StatisticCardComponent],
  templateUrl: './statistics-list.component.html',
  styleUrl: './statistics-list.component.scss',
})
export class StatisticsListComponent {
  private statisticsService = inject(StatisticsService);

  statistics = toSignal(this.statisticsService.getStatistics(), { initialValue: [] });
}
