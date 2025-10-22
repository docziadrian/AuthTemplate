import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MessageComponent } from './Components/message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIcon,
    NavbarComponent,
    MessageComponent,
    MessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroUsers })],
})
export class AppComponent {
  title = 'auth';
}
