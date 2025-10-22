import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons, NgIcon } from '@ng-icons/core';
import {
  heroUsers,
  heroUserPlus,
  heroUserCircle,
  heroArrowPathRoundedSquare,
  heroUserMinus,
  heroHome,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIcon, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [
    provideIcons({
      heroUsers,
      heroUserPlus,
      heroUserCircle,
      heroArrowPathRoundedSquare,
      heroUserMinus,
      heroHome,
    }),
  ],
})
export class NavbarComponent {
  navItems = [
    { label: 'Főoldal', path: '/main', icon: 'heroHome' },
    { label: 'Profiladatok', path: '/registration', icon: 'heroUserCircle' },
    {
      label: 'Jelszó módosítása',
      path: '/passmod',
      icon: 'heroArrowPathRoundedSquare',
    },
    {
      label: 'Kijelentkezés',
      path: '/passmod',
      icon: 'heroUserMinus',
    },
  ];
}
