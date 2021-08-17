import { Component, EventEmitter, Output } from "@angular/core";
import { DangKyInterface } from "./dang-ky.interface";

@Component({
  selector: 'app-dang-ky',
  templateUrl: 'dang-ky.component.html',
  styleUrls: ['dang-ky.component.scss']
})
export class DangKyComponent {

  public name: string = '';
  public nameClass = '';
  public invalidName = false;

  public phoneNumber: string = '';
  public phoneNumberClass = '';
  public invalidPhoneNumber = false;

  public car: string = '';
  public carClass = '';
  public invalidCar = false;

  private invalidClass: string = 'ng-invalid ng-dirty';

  @Output()
  public registerEvent = new EventEmitter<DangKyInterface>();

  public onRegister() {
    if (this.name.trim().length === 0) {
      this.invalidName = true;
      this.nameClass = this.invalidClass;
      this.name = '';
    } else {
      this.nameClass = '';
      this.invalidName = false;
    }

    if (this.phoneNumber.trim().length === 0) {
      this.invalidPhoneNumber = true;
      this.phoneNumberClass = this.invalidClass;
      this.phoneNumber = '';
    } else {
      this.phoneNumberClass = '';
      this.invalidPhoneNumber = false;
    }



    if (this.car.trim().length === 0) {
      this.invalidCar = true;
      this.carClass = this.invalidClass;
      this.car = '';
    } else {
      this.carClass = '';
      this.invalidCar = false;
    }

    if (!this.invalidName && !this.invalidPhoneNumber && !this.invalidCar) {
      const info: DangKyInterface = {
        name: this.name,
        phone: this.phoneNumber,
        car: this.car
      }

      console.log(info);

      this.registerEvent.emit(info);
    }

  }

}
