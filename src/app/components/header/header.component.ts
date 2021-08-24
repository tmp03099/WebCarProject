import { Component, OnInit } from '@angular/core';
import { EmailService, PhoneService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public phoneLink = '';
  public emailLink = '';

  constructor(
    private readonly phoneService: PhoneService,
    private readonly emailService: EmailService
  ) {
    this.phoneLink = this.phoneService.phoneLink;
    this.emailLink = this.emailService.emailLink;
  }

  ngOnInit(): void {
  }

}
