import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

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
              { label: 'Toyota Vios' , routerLink: 'xe-toyota/vios'},
              { label: 'Toyota Camry', routerLink: 'xe-toyota/camry' },
              { label: 'Toyota Corolla Altis' , routerLink: 'xe-toyota/corolla-altis'},
              { label: 'Toyota Wigo'  , routerLink: 'xe-toyota/wigo'},
              { label: 'Toyota Yaris' , routerLink: 'xe-toyota/yaris' }
            ]
          },
          {
            label: 'Xe SUV',
            items: [
              { label: 'Toyota Land Cruiser', routerLink: 'xe-toyota/land-cruiser' },
              { label: 'Toyota Rush', routerLink: 'xe-toyota/rush' },
              { label: 'Toyota Fortuner', routerLink: 'xe-toyota/fortuner' },
              { label: 'Toyota Corolla Cross', routerLink: 'xe-toyota/corolla-cross' },
              { label: 'Toyota Land Prado', routerLink: 'xe-toyota/land-prado' }
            ]
          },
          {
            label: 'Xe Chuyên Dụng',
            items: [
              { label: 'Toyota Innova' , routerLink: 'xe-toyota/innova'},
              { label: 'Toyota Avanza' , routerLink: 'xe-toyota/avanza'},
              { label: 'Toyota Hiace' , routerLink: 'xe-toyota/hiace'},
            ]
          },
          {
            label: 'Xe Bán tải',
            items: [
              { label: 'Toyota Hilux' , routerLink: 'xe-toyota/hilux'}
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
