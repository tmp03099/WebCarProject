import { Component, OnInit } from '@angular/core';
import { DangKyInterface } from 'src/app/components';
import { EmailService } from 'src/app/services';

@Component({
  selector: 'app-bao-gia',
  templateUrl: 'bao-gia.component.html',
  styleUrls: ['bao-gia.component.scss']
})
export class BaoGiaComponent implements OnInit {

  constructor(
    private readonly emailService: EmailService
  ) { }

  ngOnInit(): void {
    
  }

  public async sendEmail(event: DangKyInterface) {
    const body = `
      name: ${event.name},
      phone: ${event.phone},
      car: ${event.car}
    `;

    await this.emailService.sendEmail("ĐĂNG KÝ LÁI THỬ", body);
  }

}
