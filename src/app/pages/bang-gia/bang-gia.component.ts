import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PriceInterface } from "./price.interface";

@Component({
  selector: 'app-bang-gia',
  templateUrl: 'bang-gia.component.html',
  styleUrls: ['bang-gia.component.scss']
})
export class BangGiaComponent implements OnInit {

  boxPrices: PriceInterface [] = [
    { 
      carImgSrc: 'assets/img/cars/vios.png',
      carPrices: [
        {
         brand: 'Toyota Vios 1.5E MT (số sàn):',
         price: '478.000.000'
        },
        {
          brand: 'Toyota Vios 1.5E CVT:',
          price: '531.000.000'
        },
        {
          brand: 'Toyota Vios 1.5G CVT:',
          price: '581.000.000'
        },
        {
          brand: 'Toyota Vios 1.5G R-S:',
          price: '630.000.000'
        }
      ],
      linkDetail: 'xe-toyota/vios'
    },
    { 
      carImgSrc: 'assets/img/cars/camry.png',
      carPrices: [
        {
         brand: 'Toyota Camry 2.0G:',
         price: '1.029.000.000'
        },
        {
          brand: 'Toyota Camry 2.5G:',
          price: '1.235.000.000'
        }
      ],
      linkDetail: 'xe-toyota/camry'
    },
    { 
      carImgSrc: 'assets/img/cars/corolla altis.png',
      carPrices: [
        {
         brand: 'Toyota Corolla Altis 1.8E CVT:',
         price: '733.000.000'
        },
        {
          brand: 'Toyota Corolla Altis 1.8G CVT:',
          price: '763.000.000'
        }
      ],
      linkDetail: 'xe-toyota/corolla-altis'
    },
    { 
      carImgSrc: 'assets/img/cars/wigo.png',
      carPrices: [
        {
         brand: 'Toyota Wigo 1.2G MT:',
         price: '352.000.000'
        },
        {
          brand: 'Toyota Wigo 1.2G AT:',
          price: '385.000.000'
        }
      ],
      linkDetail: 'xe-toyota/wigo'
    },
    { 
      carImgSrc: 'assets/img/cars/yaris.png',
      carPrices: [
        {
         brand: 'Toyota Yaris 1.5G CVT:',
         price: '668.000.000'
        }
      ],
      linkDetail: 'xe-toyota/yaris'
    },
    { 
      carImgSrc: 'assets/img/cars/Rush.png',
      carPrices: [
        {
         brand: 'Toyota Rush 1.5 AT:',
         price: '634.000.000'
        }
      ],
      linkDetail: 'xe-toyota/rush'
    },
    { 
      carImgSrc: 'assets/img/cars/Fortuner.png',
      carPrices: [
        {
         brand: 'Toyota Fortuner 2.4 4x2 MT:',
         price: '995.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.4 4x2 AT:',
          price: '1.080.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.7 4x2 AT máy xăng:',
          price: '1.130.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.7 4x4 AT máy xăng:',
          price: '1.230.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.8 4x4 AT:',
          price: '1.388.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.4 4x2 AT Legender:',
          price: '1.195.000.000'
        },
        {
          brand: 'Toyota Fortuner 2.8 4x4 AT Legender:',
          price: '1.434.000.000'
        }
      ],
      linkDetail: 'xe-toyota/fortuner'
    },
    { 
      carImgSrc: 'assets/img/cars/Corolla Cross.jpg',
      carPrices: [
        {
         brand: 'Toyota Corolla Cross 1.8G CVT:',
         price: '720.000.000'
        },
        {
          brand: 'Toyota Corolla Cross 1.8V CVT:',
          price: '82.000.000'
        },
        {
          brand: 'Toyota Corolla Cross 1.8HV Hyrid:',
          price: '910.000.000'
        }
      ],
      linkDetail: 'xe-toyota/corolla-cross'
    },
    { 
      carImgSrc: 'assets/img/cars/innova.png',
      carPrices: [
        {
         brand: 'Toyota Innova 2.0E MT:',
         price: '750.000.000'
        },
        {
          brand: 'Toyota Innova 2.0G AT:',
          price: '865.000.000'
        },
        {
          brand: 'Toyota Innova Venturer:',
          price: '879.000.000'
        },
        {
          brand: 'Toyota Innova 2.0V AT:',
          price: '989.000.000'
        }
      ],
      linkDetail: 'xe-toyota/innova'
    },
    { 
      carImgSrc: 'assets/img/cars/avanza.png',
      carPrices: [
        {
         brand: 'Toyota Avanza 1.5 MT:',
         price: '544.000.000'
        },
        {
          brand: 'Toyota Avanza 1.5 AT:',
          price: '612.000.000'
        }
      ],
      linkDetail: 'xe-toyota/avanza'
    },
    { 
      carImgSrc: 'assets/img/cars/hilux.png',
      carPrices: [
        {
         brand: 'Toyota HILUX 2.4L 4X2 MT:',
         price: '622.000.000'
        },
        {
          brand: 'Toyota HILUX 2.4L 4X2 AT:',
          price: '674.000.000'
        },
        {
          brand: 'Toyota HILUX 2.4L 4X4 MT:',
          price: '799.000.000'
        },
        {
          brand: 'Toyota HILUX 2.4L 4X4 AT Advanture:',
          price: '913.000.000'
        },
      ],
      linkDetail: 'xe-toyota/hilux'
    }
  ]

  constructor(
    private readonly router: Router
  ) {}

  public ngOnInit(): void {}

  public onClick(price: PriceInterface) {
    this.router.navigate([price.linkDetail]);
  }
}
