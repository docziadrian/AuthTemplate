import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private api: ApiService,
    private messageService: MessageService
  ) {}

  loginHandler() {
    this.messageService.show(
      'error',
      'Bejelentkezési kísérlet meghiúsult',
      'Érvénytelenül megadott felhasználónév vagy jelszó.'
    );
  }

  forgotPwdHandler() {}
}
