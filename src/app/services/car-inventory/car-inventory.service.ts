import { Injectable } from "@angular/core";
import { CarInfoInterface } from "./car-info.interface";
import { CarTypeEnum } from "./car-type.enum";

@Injectable({
  providedIn: 'root'
})
export class CarInventoryService {
  private readonly carInventory: CarInfoInterface[] = [
    {
      name: 'Toyota Vios',
      type: CarTypeEnum.XeDuLich,
      models: [
        {
          brand: 'Toyota Vios 1.5E MT (số sàn)',
          price: '478.000.000'
         },
         {
           brand: 'Toyota Vios 1.5E CVT',
           price: '531.000.000'
         },
         {
           brand: 'Toyota Vios 1.5G CVT',
           price: '581.000.000'
         },
         {
           brand: 'Toyota Vios 1.5G R-S',
           price: '630.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/vios.png',
      link: 'xe-toyota/vios'
    },
    {
      name: 'Toyoto Camry',
      type: CarTypeEnum.XeDuLich,
      models: [
        {
          brand: 'Toyota Camry 2.0G',
          price: '1.029.000.000'
         },
         {
           brand: 'Toyota Camry 2.5G',
           price: '1.235.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/camry.png',
      link: 'xe-toyota/camry'
    },
    {
      name: 'Toyota Corolla Altis',
      type: CarTypeEnum.XeDuLich,
      models: [
        {
          brand: 'Toyota Corolla Altis 1.8E CVT',
          price: '733.000.000'
         },
         {
           brand: 'Toyota Corolla Altis 1.8G CVT',
           price: '763.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/corolla altis.png',
      link: 'xe-toyota/corolla-altis'
    },
    {
      name: 'Toyota Wingo',
      type: CarTypeEnum.XeDuLich,
      models: [
        {
          brand: 'Toyota Wigo 1.2G MT',
          price: '352.000.000'
         },
         {
           brand: 'Toyota Wigo 1.2G AT',
           price: '385.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/wigo.png',
      link: 'xe-toyota/wigo'
    },
    {
      name: 'Toyota Yaris',
      type: CarTypeEnum.XeDuLich,
      models: [
        {
          brand: 'Toyota Yaris 1.5G CVT',
          price: '668.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/yaris.png',
      link: 'xe-toyota/yaris'
    },
    {
      name: 'Toyota Rush',
      type: CarTypeEnum.XeSuv,
      models: [
        {
          brand: 'Toyota Rush 1.5 AT',
          price: '634.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/Rush.png',
      link: 'xe-toyota/rush'
    },
    {
      name: 'Toyota Fortuner',
      type: CarTypeEnum.XeSuv,
      models: [
        {
          brand: 'Toyota Fortuner 2.4 4x2 MT',
          price: '995.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.4 4x2 AT',
           price: '1.080.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.7 4x2 AT máy xăng',
           price: '1.130.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.7 4x4 AT máy xăng',
           price: '1.230.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.8 4x4 AT',
           price: '1.388.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.4 4x2 AT Legender',
           price: '1.195.000.000'
         },
         {
           brand: 'Toyota Fortuner 2.8 4x4 AT Legender',
           price: '1.434.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/Fortuner.png',
      link: 'xe-toyota/fortuner'
    },
    {
      name: 'Toyota Corolla Cross',
      type: CarTypeEnum.XeSuv,
      models: [
        {
          brand: 'Toyota Corolla Cross 1.8G CVT',
          price: '720.000.000'
         },
         {
           brand: 'Toyota Corolla Cross 1.8V CVT',
           price: '82.000.000'
         },
         {
           brand: 'Toyota Corolla Cross 1.8HV Hyrid',
           price: '910.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/Corolla Cross.jpg',
      link: 'xe-toyota/corolla-cross'
    },
    {
      name: 'Toyota Innova',
      type: CarTypeEnum.XeChuyenDung,
      models: [
        {
          brand: 'Toyota Innova 2.0E MT',
          price: '750.000.000'
         },
         {
           brand: 'Toyota Innova 2.0G AT',
           price: '865.000.000'
         },
         {
           brand: 'Toyota Innova Venturer',
           price: '879.000.000'
         },
         {
           brand: 'Toyota Innova 2.0V AT',
           price: '989.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/innova.png',
      link: 'xe-toyota/innova'
    },
    {
      name: 'Toyota Avanza',
      type: CarTypeEnum.XeChuyenDung,
      models: [
        {
          brand: 'Toyota Avanza 1.5 MT',
          price: '544.000.000'
        },
        {
          brand: 'Toyota Avanza 1.5 AT',
          price: '612.000.000'
        }
      ],
      imgSrc: 'assets/img/cars/avanza.png',
      link: 'xe-toyota/avanza'
    },
    {
      name: 'Toyota Hilux',
      type: CarTypeEnum.XeBanTai,
      models: [
        {
          brand: 'Toyota HILUX 2.4L 4X2 MT',
          price: '622.000.000'
         },
         {
           brand: 'Toyota HILUX 2.4L 4X2 AT',
           price: '674.000.000'
         },
         {
           brand: 'Toyota HILUX 2.4L 4X4 MT',
           price: '799.000.000'
         },
         {
           brand: 'Toyota HILUX 2.4L 4X4 AT Advanture',
           price: '913.000.000'
         }
      ],
      imgSrc: 'assets/img/cars/hilux.png',
      link: 'xe-toyota/hilux'
    }
  ];

  constructor() {}

  public getCarInventory() {
    return this.carInventory;
  }

  public getCarList(): string[] {
    const carList: string[] = [];

    this.carInventory.forEach(car => {
      carList.push(car.name);
    });

    return carList;
  }

  public getCarModels(selectedCarName: string): string[] {
    const modelList: string[] = [];

    const selectedCar = this.carInventory.find(car => car.name === selectedCarName)
    console.log(selectedCar);
    if (selectedCar) {
      selectedCar.models.forEach((model) => {
        modelList.push(model.brand);
      });
    }

    return modelList;
  }
}
