import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public searchIcon = faSearch;
  searchValue = '';

  public items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Trang Chủ', routerLink: 'home'},
      { label: 'Giới Thiệu', routerLink: 'introduction'},
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
      { label: 'Bảng Giá', routerLink: 'bang-gia' },
      {
        label: 'Mua Xe',
        items: [[
          { items: [
              { label: 'Đăng Ký Lái Thử', routerLink: 'mua-xe/lai-thu' },
              { label: 'Trả Góp', routerLink: 'mua-xe/tra-gop' }
            ]
          }
        ]]
      },
      { label: 'Xe qua sử dụng', routerLink: 'xe-qua-su-dung' },
      { label: 'Khuyến Mãi', routerLink: 'khuyen-mai' },
      { label: 'Tin Tức', routerLink: 'tin-tuc' },
      { label: 'Liên Hệ', routerLink: 'lien-he' }
    ]
  }

}
