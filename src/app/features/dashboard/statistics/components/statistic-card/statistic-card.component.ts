import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Statistic } from '../../models';

@Component({
  selector: 'app-statistic-card',
  imports: [MatCardModule],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.scss',
})
export class StatisticCardComponent {
  statistic = input.required<Statistic>();
}
