import { Injectable } from "@angular/core";

@Injectable()
export class ChiPhiService {
  private basePrice: number = 0;
  private phiTruocBa: number = 0;
  private phiDangKy: number = 1000000;
  private phiBaoHiemVatChat: number = 0;
  private phiDuongBo: number = 1580000;
  private phiDangKiem: number = 340000;
  private phiDichVuDangKy: number = 0;
  private phiBaoHiemBatBuoc: number = 943400;
  private finalPrice: number = 0;

  public set price(price: number){
    this.basePrice = price;
    this.phiTruocBa = this.basePrice * .1;
    this.phiBaoHiemVatChat = this.basePrice *.016;
    this.finalPrice = this.basePrice + this.phiTruocBa + this.phiDangKy +
                      this.phiBaoHiemVatChat + this.phiDuongBo + this.phiDangKiem +
                      this.phiDichVuDangKy + this.phiBaoHiemBatBuoc;
  }

  public get isPriceAvailable(): boolean {
    return this.basePrice > 0;
  }

  public get formatedBasePrice(): string {
    return this.formatValue(this.basePrice);
  }

  public get formatedPhiTruocBa(): string {
    return this.formatValue(this.phiTruocBa);
  }

  public get formatedPhiDangKy(): string {
    return this.formatValue(this.phiDangKy);
  }

  public get formatedPhiBaoHiemVatChat(): string {
    return this.formatValue(this.phiBaoHiemVatChat);
  }

  public get formatedPhiDuongBo(): string {
    return this.formatValue(this.phiDuongBo);
  }

  public get formatedPhiDangKiem(): string {
    return this.formatValue(this.phiDangKiem);
  }

  public get formatedPhiDichVuDangKy(): string {
    return this.formatValue(this.phiDichVuDangKy);
  }

  public get formatedPhiBaoHiemBatBuoc(): string {
    return this.formatValue(this.phiBaoHiemBatBuoc);
  }

  public get formatedFinalPrice(): string {
    return this.formatValue(this.finalPrice);
  }

  public formatValue(value: number): string {
    return value.toLocaleString('de-DE');
  }
}
