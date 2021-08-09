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

  public pictureLibrary: string[] = [];

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

      if (this.displayingModel.library) {
        this.pictureLibrary = this.displayingModel.library;
      }
    });

    this.menu = [];
    this.menu.push({label: 'TỔNG QUAN'});

    if (this.displayingModel.ngoaiThat) {
      this.menu.push({label: 'NGOẠI THẤT'});
    }

    if (this.displayingModel.noiThat) {
      this.menu.push({label: 'NỘI THẤT'});
    }

    if (this.displayingModel.tinhNang) {
      this.menu.push({label: 'Tính năng'});
    }

    if (this.displayingModel.thongSo) {
      this.menu.push({label: 'THÔNG SỐ'});
    }
  }
}
