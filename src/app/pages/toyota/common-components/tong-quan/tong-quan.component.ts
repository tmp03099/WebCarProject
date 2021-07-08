import { Component, Input, OnInit } from "@angular/core";
import { CarInfoInterface, ChiPhiService } from "src/app/services";
import { CarColorInterface } from "src/app/services/car-inventory/car-color.interface";

@Component({
  selector: 'app-tong-quan',
  templateUrl: 'tong-quan.component.html',
  styleUrls: ['tong-quan.component.scss']
})
export class TongQuanComponent implements OnInit {
  @Input()
  public carInfo: CarInfoInterface | undefined;

  public colors: CarColorInterface[] = [];
  public displayingCar: CarColorInterface | undefined;

  constructor(
    private readonly chiPhiService: ChiPhiService
  ){}

  public ngOnInit() {
    console.log(this.colors);

    this.colors = this.carInfo!!.colors;
    this.displayingCar = this.colors[0];
  }

  public selectColor(index: number){
    this.displayingCar = this.colors[index];
  }

  public get carPrice(): string {
    return this.chiPhiService.formatValue(this.carInfo?.lowestPrice!!);
  }

}
