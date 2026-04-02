import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'Tasks', route: '/tasks', icon: '✅' },
    { label: 'Calendar', route: '/calendar', icon: '📅' },
    { label: 'Analytics', route: '/analytics', icon: '📈' },
    { label: 'Team', route: '/team', icon: '👥'},
    { label: 'Settings', route: '/settings', icon: '⚙️' }
  ];
}
