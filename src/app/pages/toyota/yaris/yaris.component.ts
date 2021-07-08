import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CarInfoInterface, CarInventoryService } from 'src/app/services';

@Component({
  selector: 'app-yaris',
  templateUrl: './yaris.component.html',
  styleUrls: ['./yaris.component.scss']
})
export class YarisComponent implements OnInit {

  public menu: MenuItem[] = [];

  public car?: CarInfoInterface = undefined;

  private readonly carName = 'Toyota Yaris';

  constructor(
    private readonly carInventoryService: CarInventoryService
  ){}

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

    this.car = this.carInventoryService.getCar(this.carName);
    console.log(this.car)
  }
}
