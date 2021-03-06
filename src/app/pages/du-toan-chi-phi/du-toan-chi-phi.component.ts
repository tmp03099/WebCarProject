import { Component, OnInit } from "@angular/core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { MessageService } from "primeng/api";
import { DangKyInterface } from "src/app/components";
import { CarInventoryService, ChiPhiService, EmailService } from "src/app/services";

@Component({
  selector: 'app-du-toan-chi-phi',
  templateUrl: 'du-toan-chi-phi.component.html',
  styleUrls: ['du-toan-chi-phi.component.scss']
})
export class DuToanChiPhiComponent implements OnInit{
  public location: string = '';
  public locations: string[];

  public carName: string = '';
  public carNames: string[];

  public carModel: string = '';
  public carModels: string[];

  public userIcon = faUser;

  public  readonly defaultPriceInfo = "Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí. Lưu ý dự toán chỉ mang tính chất tham khảo. Quý khách có nhu cầu báo giá chính xác vui lòng liên hệ Hotline: 0987 777 529 !!!"
  private readonly defaultCarNames  = ['Chọn Xe'];
  private readonly defaultCarModels = ['Chon Phiên Bản'];

  constructor(
    private readonly carInventoryService: CarInventoryService,
    private readonly chiPhiService: ChiPhiService,
    private readonly emailService: EmailService,
    private readonly messageService: MessageService
  ) {
    this.locations = ['An Giang', 'Khu Vực Khác'];
    this.carNames  = this.defaultCarNames;
    this.carModels = this.defaultCarModels;
  }

  public ngOnInit() {
    this.carNames = this.defaultCarNames.concat(this.carInventoryService.getCarList());
  }

  public carChanged(){
    this.carModels = this.defaultCarModels.concat(this.carInventoryService.getCarModels(this.carName));
    this.chiPhiService.price = 0;
  }

  public modelChanged(){
    this.chiPhiService.price = this.carInventoryService.getCarPrice(this.carName, this.carModel);
  }

  public get isDisplayPrice(): boolean {
    return this.chiPhiService.isPriceAvailable;
  }

  public get basePrice(): string {
    return this.chiPhiService.formatedBasePrice;
  }

  public get phiTruocBa(): string | undefined{
    return this.chiPhiService.formatedPhiTruocBa;
  }

  public get phiDangKy(): string {
    return this.chiPhiService.formatedPhiDangKy;
  }

  public get phiBaoHiemVatChat(): string {
    return this.chiPhiService.formatedPhiBaoHiemVatChat;
  }

  public get phiDuongBo(): string {
    return this.chiPhiService.formatedPhiDuongBo;
  }

  public get phiDangKiem(): string {
    return this.chiPhiService.formatedPhiDangKiem;
  }

  public get phiDichVuDangKy(): string {
    return this.chiPhiService.formatedPhiDichVuDangKy;
  }

  public get phiBaoHiemBatBuoc(): string {
    return this.chiPhiService.formatedPhiBaoHiemBatBuoc;
  }

  public get phiTongDuToan(): string {
    return this.chiPhiService.formatedFinalPrice;
  }

  public async sendEmail(event: DangKyInterface) {
    console.log(event);

    const text = `
      Name: ${event.name}
      Phone Number: ${event.phone}
      Car: ${event.car}
    `;

    await this.emailService.sendEmail("du toan chi phi", text);
  }
}
