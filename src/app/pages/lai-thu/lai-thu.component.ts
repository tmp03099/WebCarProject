import { Component, OnInit } from '@angular/core';
import { DangKyInterface } from 'src/app/components';
import { EmailService } from 'src/app/services';

@Component({
  selector: 'app-lai-thu',
  templateUrl: 'lai-thu.component.html',
  styleUrls: ['lai-thu.component.scss']
})
export class LaiThuComponent implements OnInit {

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
