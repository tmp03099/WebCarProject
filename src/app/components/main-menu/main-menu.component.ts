import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { KhuyenMaiComponent } from 'src/app/pages';
import { CarInventoryService, CarTypeEnum } from 'src/app/services';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public items: MegaMenuItem[] = [];

  constructor(
    private readonly carInventoryService: CarInventoryService
  ) { }

  ngOnInit(): void {
    const xeDuLich: MenuItem[] = [];
    const xeSuv: MenuItem[] = [];
    const xeChuyenDung: MenuItem[] = [];
    const xeBanTai: MenuItem[] = [];

    this.carInventoryService.getCarsByType(CarTypeEnum.XeDuLich).forEach((car) => {
      xeDuLich.push({label: car.name, routerLink: car.link})
    });

    this.carInventoryService.getCarsByType(CarTypeEnum.XeSuv).forEach((car) => {
      xeSuv.push({label: car.name, routerLink: car.link})
    });

    this.carInventoryService.getCarsByType(CarTypeEnum.XeChuyenDung).forEach((car) => {
      xeChuyenDung.push({label: car.name, routerLink: car.link})
    });

    this.carInventoryService.getCarsByType(CarTypeEnum.XeBanTai).forEach((car) => {
      xeBanTai.push({label: car.name, routerLink: car.link})
    });

    this.items = [
      { label: 'Trang Chủ', routerLink: 'home'},
      { label: 'Giới Thiệu', routerLink: 'introduction'},
      {
        label: 'Xe Toyota',
        items: [[
          {
            label: 'Xe Du Lịch',
            items: xeDuLich
          },
          {
            label: 'Xe SUV',
            items: xeSuv
          },
          {
            label: 'Xe Chuyên Dụng',
            items: xeChuyenDung
          },
          {
            label: 'Xe Bán tải',
            items: xeBanTai
          },
        ]]
      },
      { label: 'Bảng Giá', routerLink: 'bang-gia' },
      {
        label: 'Mua Xe',
        items: [[
          { items: [
              { label: 'Đăng Ký Lái Thử', routerLink: 'mua-xe/lai-thu' },
              { label: 'Trả Góp', routerLink: 'mua-xe/tra-gop' },
              { label: 'Dự toán Chi Phí', routerLink: 'du-toan-chi-phi' },
            ]
          }
        ]]
      },
      { label: 'Khuyến Mãi', routerLink: 'khuyen-mai' },
      { label: 'Xe qua sử dụng', routerLink: 'xe-qua-su-dung' }
    ]
  }

}
