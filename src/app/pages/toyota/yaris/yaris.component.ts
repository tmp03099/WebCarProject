import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-yaris',
  templateUrl: './yaris.component.html',
  styleUrls: ['./yaris.component.scss']
})
export class YarisComponent implements OnInit {

  public menu: MenuItem[] = [];

  constructor(){}

  ngOnInit(): void {
    this.menu = [
      {label: 'TỔNG QUAN'},
      {label: 'NGOẠI THẤT'},
      {label: 'NỘI THẤT'},
      {label: 'TIỆN NGHI'},
      {label: 'VẬN HÀNH'},
      {label: 'THÔNG SỐ'},
      {label: 'ẢNH'},
      {label: 'LIÊN HỆ'}
    ]
  }

}
