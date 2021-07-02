import { Component, OnInit } from "@angular/core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CarInventoryService } from "src/app/services/car-inventory";

@Component({
  selector: 'app-du-toan-chi-phi',
  templateUrl: 'du-toan-chi-phi.component.html',
  styleUrls: ['du-toan-chi-phi.component.scss']
})
export class DuToanChiPhiComponent implements OnInit{
  public priceInfo: string;

  public location: string = '';
  public locations: string[];

  public carName: string = '';
  public carNames: string[];


  public carModel: string = '';
  public carModels: string[];

  public userIcon = faUser;

  private readonly defaultPriceInfo = "Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí. Lưu ý dự toán chỉ mang tính chất tham khảo. Quý khách có nhu cầu báo giá chính xác vui lòng liên hệ Hotline: 0929 618 818 !!!"
  private readonly defaultCarNames = ['Chon Xe'];
  private readonly defaultCarModels = ['Chon Phien Ban'];

  constructor(
    private readonly carInventoryService: CarInventoryService
  ) {
    this.priceInfo = this.defaultPriceInfo;

    this.locations = ['An Giang', 'Khu Vuc Khac'];
    this.carNames  = this.defaultCarNames;
    this.carModels = this.defaultCarModels;
  }

  public ngOnInit() {
    this.carNames = this.defaultCarNames.concat(this.carInventoryService.getCarList());
  }

  public carChanged(){
    this.carModels = this.defaultCarModels.concat(this.carInventoryService.getCarModels(this.carName));
    this.carModel = this.carModels[0];
  }

}
