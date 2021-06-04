import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Trang Chủ'},
      { label: 'Giới Thiệu'},
      {
        label: 'Xe Toyota',
        items: [[
          {
            label: 'Xe Du Lịch',
            items: [
              { label: 'Toyota Vios' },
              { label: 'Toyota Camry' },
              { label: 'Toyota Corolla Altis' },
              { label: 'Toyota Wigo' },
              { label: 'Toyota Yaris' }
            ]
          },
          {
            label: 'Xe SUV',
            items: [
              { label: 'Toyota Land Cruiser' },
              { label: 'Toyota Rush' },
              { label: 'Toyota Fortuner' },
            ]
          },
          {
            label: 'Xe Chuyên Dụng',
            items: [
              { label: 'Toyota Innova' },
              { label: 'Toyota Avanza' },
              { label: 'Toyota Hiace' },
            ]
          },
          {
            label: 'Xe Bán tải',
            items: [
              { label: 'Toyota Hilux' }
            ]
          },
        ]]
      },
      { label: 'Bảng Giá' },
      {
        label: 'Mua Xe',
        items: [[
          { label: 'Đăng Ký Lái Thử' }, { label: 'Trả Góp' }
        ]]
      },
      { label: 'Khuyến Mãi' },
      { label: 'Tin Tức' },
      { label: 'Liên Hệ' }
    ]
  }

}
