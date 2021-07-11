import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { CarInfoInterface, CarInventoryService, CarModelInfoInterface } from "src/app/services";

@Component({
  selector: 'app-toyota',
  templateUrl: 'toyota.component.html',
  styleUrls: ['toyota.component.scss']
})
export class ToyotaComponent implements OnInit {

  public carUri: string;

  public menu: MenuItem[] = [];

  public carInfo: CarInfoInterface;
  public displayingModel: CarModelInfoInterface;
  public otherModels: CarModelInfoInterface[] = [];
  public banner: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly carInventoryService: CarInventoryService
  ) {}

  public ngOnInit() {
    console.log('ngOnInit');

    this.route.paramMap.subscribe(paramMap => {
      this.carUri = paramMap.get('car-model')!!;
      console.log(this.carUri);

      this.otherModels = [];
      this.carInfo = this.carInventoryService.getCarFromUri(this.carUri)!!;
      this.banner = this.carInfo.banner!!;
      if (this.carInfo) {
        this.carInfo.models.forEach((model) => {
          if (model.link!!.indexOf(this.carUri) >= 0) {
            this.displayingModel = model;
          } else {
            this.otherModels.push(model);
          }
        });
      }
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
    ];
  }
}
