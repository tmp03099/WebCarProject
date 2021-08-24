import { Component, OnInit } from '@angular/core';
import { faCar, faCaretRight, faEnvelope, faMapSigns, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CarInfoInterface, CarInventoryService, EmailService, PhoneService } from 'src/app/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public directionIcon = faMapSigns;
  public phoneIcon = faPhone;
  public mailIcon = faEnvelope;
  public carImage = faCar;
  public faCaretRight = faCaretRight;

  public name: string = '';
  public invalidName = false;
  public nameClass = '';

  public phone: string = '';
  public invalidPhone = false;
  public phoneClass = '';

  public carList: CarInfoInterface[] = [];

  public phoneLink = '';

  private invalidClass: string = 'ng-invalid ng-dirty';

  constructor(
    private readonly carInventoryService: CarInventoryService,
    private readonly emailService: EmailService,
    private readonly phoneService: PhoneService
  ) {
    this.phoneLink = this.phoneService.phoneLink;
  }

  ngOnInit(): void {
    this.carList = [];

    this.carInventoryService.getCarList().forEach((carName) => {
      const car = this.carInventoryService.getCar(carName);
      this.carList.push(car!!);
    });
    if (this.carList.length % 2 !== 0) {
      const dummyCar = {...this.carList[0]};
      dummyCar.name = '';

      this.carList.push(dummyCar);
    }
  }

  public async sendEmail() {
    if (this.name.trim().length === 0) {
      this.invalidName = true;
      this.nameClass = this.invalidClass;
      this.name = '';
    } else {
      this.nameClass = '';
      this.invalidName = false;
    }

    if (this.phone.trim().length === 0) {
      this.invalidPhone = true;
      this.phoneClass = this.invalidClass;
      this.phone = '';
    } else {
      this.phoneClass = '';
      this.invalidPhone = false;
    }

    if (!this.invalidName && !this.invalidPhone) {
      const subject = 'Goi Cho Toi';
      const text = `
        name: ${this.name}
        phone: ${this.phone}
      `;

      await this.emailService.sendEmail(subject, text);
    }

    console.log(this.name, this.phone);
  }
}
