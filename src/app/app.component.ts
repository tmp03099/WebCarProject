import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Đại lý Toyota An Giang Chính Hãng';

  constructor(
    private readonly messageService: MessageService, 
    private titleService: Title
  ){
    this.titleService.setTitle(this.title);
  }

}
