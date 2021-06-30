import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-du-toan-chi-phi',
  templateUrl: 'du-toan-chi-phi.component.html',
  styleUrls: ['du-toan-chi-phi.component.scss']
})
export class DuToanChiPhiComponent implements OnInit {
  public priceInfo: String;

  private readonly defaultPriceInfo = "Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí. Lưu ý dự toán chỉ mang tính chất tham khảo. Quý khách có nhu cầu báo giá chính xác vui lòng liên hệ Hotline: 0929 618 818 !!!"

  constructor() {
    this.priceInfo = this.defaultPriceInfo;
  }

  public ngOnInit() {
  }
}
