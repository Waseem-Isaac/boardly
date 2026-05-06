import { Component, computed, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export interface PaginationMeta {
  totalCount: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

@Component({
  selector: 'app-pagination',
  imports: [MatIconButton, MatIcon],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  meta = input<PaginationMeta | null>(null);
  pageChange = output<number>();

  pages = computed(() => {
    const m = this.meta();
    if (!m) return [];
    const { totalPages: total, page: current } = m;

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1) as (number | null)[];
    }

    const result: (number | null)[] = [];

    if (current <= 4) {
      for (let i = 1; i <= 5; i++) result.push(i);
      result.push(null, total);
    } else if (current >= total - 3) {
      result.push(1, null);
      for (let i = total - 4; i <= total; i++) result.push(i);
    } else {
      result.push(1, null);
      for (let i = current - 1; i <= current + 1; i++) result.push(i);
      result.push(null, total);
    }

    return result;
  });

  goTo(page: number | null): void {
    if (page !== null) this.pageChange.emit(page);
  }
}
