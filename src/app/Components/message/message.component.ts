import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Message } from '../../Interfaces/Message';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  message: Message | null = null;
  hidden: boolean = false;

  // Fel kell iratkozni a service üzenetére
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.message$.subscribe((msg) => {
      this.message = msg;
      this.hidden = msg ? false : true;
    });
  }

  closeMessage() {
    this.hidden = true;
  }
}
