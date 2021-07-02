import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarInventoryService, ChiPhiService } from "src/app/services";
import { PriceInterface } from "./price.interface";

@Component({
  selector: 'app-bang-gia',
  templateUrl: 'bang-gia.component.html',
  styleUrls: ['bang-gia.component.scss']
})
export class BangGiaComponent implements OnInit {

  boxPrices: PriceInterface[] = [];

  constructor(
    private readonly router: Router,
    private readonly carInventoryService: CarInventoryService,
    private readonly chiphiService: ChiPhiService
  ) {}

  public ngOnInit(): void {
    const carInventory = this.carInventoryService.getCarInventory();
    carInventory.forEach(car => {
      const newPrice: PriceInterface = {
        carImgSrc: car.imgSrc!!,
        carPrices: [],
        linkDetail: car.link!!
      };

      car.models.forEach(model => {
        newPrice.carPrices.push({
          brand: model.brand,
          price: this.chiphiService.formatValue(model.price)
        })
      })

      this.boxPrices.push(newPrice);
    });

  }

  public onClick(price: PriceInterface) {
    this.router.navigate([price.linkDetail]);
  }
}
