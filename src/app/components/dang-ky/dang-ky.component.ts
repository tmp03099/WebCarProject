import { Component, EventEmitter, Output } from "@angular/core";
import { DangKyInterface } from "./dang-ky.interface";

@Component({
  selector: 'app-dang-ky',
  templateUrl: 'dang-ky.component.html',
  styleUrls: ['dang-ky.component.scss']
})
export class DangKyComponent {

  public name: string;

  public phoneNumber: string;

  public car: string;

  @Output()
  public registerEvent = new EventEmitter<DangKyInterface>();

  public onRegister() {
    const info: DangKyInterface = {
      name: this.name,
      phone: this.phoneNumber,
      car: this.car
    }

    this.registerEvent.emit(info);
  }

}
