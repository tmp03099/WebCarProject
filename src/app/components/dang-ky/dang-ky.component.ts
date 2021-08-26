import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DangKyInterface } from "./dang-ky.interface";
import { CarInventoryService } from 'src/app/services';

@Component({
  selector: 'app-dang-ky',
  templateUrl: 'dang-ky.component.html',
  styleUrls: ['dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  public name: string = '';
  public nameClass = '';
  public invalidName = false;

  public phoneNumber: string = '';
  public phoneNumberClass = '';
  public invalidPhoneNumber = false;

  public car: string = '';
  public carClass = '';
  public invalidCar = false;

  public carList: string[] = [];
  public selectedCar: string;

  private invalidClass: string = 'ng-invalid ng-dirty';
  private readonly defaultSelected = "Dòng xe bạn quan tâm";

  constructor(
    private readonly carInventoryService: CarInventoryService,
  ) { }

  ngOnInit(): void {
    this.carList.push(this.defaultSelected);

    this.carList = this.carList.concat(this.carInventoryService.getCarList());

    this.selectedCar = this.defaultSelected;
  }

  @Output()
  public registerEvent = new EventEmitter<DangKyInterface>();

  public onRegister() {
    console.log('onRegister');

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

    console.log(this.selectedCar);

    if (this.selectedCar === this.defaultSelected) {
      this.invalidCar = true;
      this.carClass = this.invalidClass;
    } else {
      this.carClass = '';
      this.invalidCar = false;
    }

    if (!this.invalidName && !this.invalidPhoneNumber && !this.invalidCar) {
      const info: DangKyInterface = {
        name: this.name,
        phone: this.phoneNumber,
        car: this.selectedCar
      }

      console.log(info);

      this.registerEvent.emit(info);
    }

  }

}
