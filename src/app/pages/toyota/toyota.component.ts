import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { CarInfoInterface, CarInventoryService } from "src/app/services";

@Component({
  selector: 'app-toyota',
  templateUrl: 'toyota.component.html',
  styleUrls: ['toyota.component.scss']
})
export class ToyotaComponent implements OnInit {

  public carUri: string;

  public menu: MenuItem[] = [];

  public carInfo: CarInfoInterface;

  private readonly carName = 'Toyota Yaris';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly carInventoryService: CarInventoryService
  ) {}

  public ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.carUri = paramMap.get('car-model')!!;
    });

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

    this.carInfo = this.carInventoryService.getCarFromUri(this.carUri)!!;
    console.log(this.carInfo);
  }
}
