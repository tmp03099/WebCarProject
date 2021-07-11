import { Component, Input, OnInit } from "@angular/core";
import { CarInfoInterface, CarModelInfoInterface, ChiPhiService } from "src/app/services";
import { CarColorInterface } from "src/app/services/car-inventory/car-color.interface";

@Component({
  selector: 'app-tong-quan',
  templateUrl: 'tong-quan.component.html',
  styleUrls: ['tong-quan.component.scss']
})
export class TongQuanComponent implements OnInit {
  @Input()
  public carInfo: CarInfoInterface;

  public models: CarModelInfoInterface[] = [];
  public colors: CarColorInterface[] = [];
  public displayingModel: CarModelInfoInterface;
  public displayingCar: CarColorInterface;

  constructor(
    private readonly chiPhiService: ChiPhiService
  ){}

  public ngOnInit() {
    console.log(this.colors);

    this.models = this.carInfo.models;
    if (this.models) {
      this.displayingModel = this.models[0];

      this.colors = this.displayingModel.colors!!;
      if (this.colors) {
        this.displayingCar = this.colors[0];
      }
    }

  }

  //changed the display car by use input index
  public selectColor(index: number) {
    this.displayingCar = this.colors[index];
  }


  public get carPrice(): string {
    return this.chiPhiService.formatValue(this.displayingModel.price);
  }

  public get hasOtherModels(): boolean {
    return this.carInfo.models.length > 1;
  }
}
