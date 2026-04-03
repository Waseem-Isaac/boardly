import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Statistic } from './models';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private http = inject(HttpClient);

  getStatistics(): Observable<Statistic[]> {
    return this.http
      .get<{ statistics: Statistic[] }>('/statistics.json')
      .pipe(map((data) => data.statistics));
  }
}
