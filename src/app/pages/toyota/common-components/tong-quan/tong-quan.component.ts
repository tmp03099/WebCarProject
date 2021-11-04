import { Component, Input, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { CarColorInterface, CarModelInfoInterface, ChiPhiService, PhoneService } from "src/app/services";
import { PromotionsService } from "src/app/services/promotions";
import { PromotionsComponent } from "../promotions";

@Component({
  selector: 'app-tong-quan',
  templateUrl: 'tong-quan.component.html',
  styleUrls: ['tong-quan.component.scss']
})
export class TongQuanComponent implements OnChanges {
  @Input()
  public displayingModel: CarModelInfoInterface;

  @Input()
  public otherModels: CarModelInfoInterface[] = [];

  public colors: CarColorInterface[] = [];
  public displayingCar: CarColorInterface;

  public phoneLink = '';
  public dangKyLaiThuLink = "mua-xe/lai-thu"

  public promotionsHeader = '';
  public promotions: string[] = [];


  constructor(
    private readonly router: Router,
    private readonly chiPhiService: ChiPhiService,
    private readonly phoneService: PhoneService,
    private readonly promotionsService: PromotionsService
  ){
    this.phoneLink = this.phoneService.phoneLink;
    this.promotionsHeader = this.promotionsService.header;
    this.promotions = this.promotionsService.promotions;
  }

  public ngOnChanges() {
    this.colors = this.displayingModel.colors!!;
    if (this.colors) {
      this.displayingCar = this.colors[0];
    }
  }

  //changed the display car by use input index
  public selectColor(index: number) {
    this.displayingCar = this.colors[index];
  }

  public formatCarPrice(price: number): string {
    return this.chiPhiService.formatValue(price);
  }

  public onClick(model: CarModelInfoInterface) {
    console.log(model);
    this.router.navigate([model.link]);
  }

  public getModelImageSrc(model: CarModelInfoInterface): string {
    var imgSrc = '';

    if (model.colors) {
      imgSrc = model.colors!![0].image;
    }

    return imgSrc;
  }

  public get hasOtherModels(): boolean {
    return this.otherModels.length > 0;
  }
}
