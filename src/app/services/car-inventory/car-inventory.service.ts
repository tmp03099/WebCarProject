import { Injectable, OnInit } from "@angular/core";
import { CarInfoInterface } from "./car-info.interface";
import { CarModelInfoInterface } from "./car-model-info.interface";
import { CarTypeEnum } from "./car-type.enum";

@Injectable({
  providedIn: 'root'
})
export class CarInventoryService implements OnInit {
  private readonly carInventory: CarInfoInterface[] = [];

  constructor() {
    this.carInventory.push(
      {
        name: 'Toyota Vios',
        type: CarTypeEnum.XeDuLich,
        models: [
          {
            brand: 'Toyota Vios 1.5E MT',
            price: 478000000
           },
           {
             brand: 'Toyota Vios 1.5E CVT',
             price: 531000000
        
           },
           {
             brand: 'Toyota Vios 1.5G CVT',
             price: 581000000
           },
           {
             brand: 'Toyota Vios 1.5G R-S',
             price: 630000000
           }
        ],
        imgSrc: 'assets/img/cars/vios.png',
        link: 'xe-toyota/vios',
        //same colors
        colors: [
            {
              label: 'Đỏ - 3G3',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(3R3)-1.png',
              colorCode: 'red'
            },
            {
              label: 'Nâu Vàng - 4R0',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(4R0)-1.png',
              colorCode: 'brown yellow'
            },
            {
              label: 'Trắng - 040',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(040)-1.png',
              colorCode: 'white'
            },
            {
              label: 'Trắng ngọc trai - 089',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(089)-1.png',
              colorCode: 'pero'
            },
            {
              label: 'Đen - 218',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(218)-1.png',
              colorCode: 'black'
            },
            {
              label: 'Vàng - 576',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(576)-1.png',
              colorCode: 'yellow'
            },
            {
              label: 'Bạc - 1D6',
              image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(1D6)-1.png',
              colorCode: 'sliver'
            }
        ]
      });

      this.carInventory.push({
        name: 'Toyoto Camry',
        type: CarTypeEnum.XeDuLich,
        models: [
          {
            brand: 'Toyota Camry 2.0G',
            price: 1029000000
           },
           {
             brand: 'Toyota Camry 2.5G',
             price: 1235000000
           }
        ],
        imgSrc: 'assets/img/cars/camry.png',
        link: 'xe-toyota/camry',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Corolla Altis',
        type: CarTypeEnum.XeDuLich,
        models: [
          {
            brand: 'Toyota Corolla Altis 1.8E CVT',
            price: 733000000
           },
           {
             brand: 'Toyota Corolla Altis 1.8G CVT',
             price: 763000000
           }
        ],
        imgSrc: 'assets/img/cars/corolla altis.png',
        link: 'xe-toyota/corolla-altis',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Wingo',
        type: CarTypeEnum.XeDuLich,
        models: [
          {
            brand: 'Toyota Wigo 1.2G MT',
            price: 352000000
           },
           {
             brand: 'Toyota Wigo 1.2G AT',
             price: 385000000
           }
        ],
        imgSrc: 'assets/img/cars/wigo.png',
        link: 'xe-toyota/wigo',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Yaris',
        type: CarTypeEnum.XeDuLich,
        models: [
          {
            brand: 'Toyota Yaris 1.5G CVT',
            price: 668000000,
            manufacture: 'Nhap',
            otherInfo: ['info 1', 'info 2'],
            colors: [
              {
                label: 'Xám - 1G3',
                image: '/assets/img/toyota/yaris/colors/1G3_GRAY-1.png',
                colorCode: 'gray'
              },
              {
                label: 'Trắng- 040',
                image: '/assets/img/toyota/yaris/colors/040_SUPER-WHITE-1.png',
                colorCode: 'white'
              },
              {
                label: 'Đen - 218',
                image: '/assets/img/toyota/yaris/colors/218_ATTITUDE-BLACK-1.png',
                colorCode: 'black'
              },
              {
                label: 'Cam - 4R8',
                image: '/assets/img/toyota/yaris/colors/4R8_ORANGE-1.png',
                colorCode: 'orange'
              },
              {
                label: 'Vàng - 6W2',
                image: '/assets/img/toyota/yaris/colors/6W2_YELLOW-1.png',
                colorCode: 'yellow'
              },
              {
                label: 'Xanh - 8W9',
                image: '/assets/img/toyota/yaris/colors/8W9_CYAN-METALLIC-1.png',
                colorCode: 'blue'
              },
              {
                label: 'Bạc - 1D4',
                image: '/assets/img/toyota/yaris/colors/1D4_SILVER-1.png',
                colorCode: 'silver'
              },
              {
                label: 'Đỏ - 3R3',
                image: '/assets/img/toyota/yaris/colors/3R3_RED-1.png',
                colorCode: 'red'
              }
            ]
           }
        ],
        imgSrc: 'assets/img/cars/yaris.png',
        link: 'xe-toyota/yaris',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Rush',
        type: CarTypeEnum.XeSuv,
        models: [
          {
            brand: 'Toyota Rush 1.5 AT',
            price: 634000000
           }
        ],
        imgSrc: 'assets/img/cars/Rush.png',
        link: 'xe-toyota/rush',
        colors: [
          {
            label: 'Bạc',
            image: '/assets/img/toyota/rush/colors/Bac-2.png',
            colorCode: 'sliver'
          },
          {
            label: 'Đen',
            image: '/assets/img/toyota/rush/colors/Den-2.png',
            colorCode: 'black'
          },
          {
            label: 'Đỏ',
            image: '/assets/img/toyota/rush/colors/Do-2.png',
            colorCode: 'red'
          },
          {
            label: 'Đồng',
            image: '/assets/img/toyota/rush/colors/Dong-4t3.png',
            colorCode: 'bronze'
          },
          {
            label: 'Nâu',
            image: '/assets/img/toyota/rush/colors/Nau-2.png',
            colorCode: 'brown'
          },
          {
            label: 'Trắng',
            image: '/assets/img/toyota/rush/colors/Trang-2.png',
            colorCode: 'white'
          }

        ]
      });

      this.carInventory.push({
        name: 'Toyota Fortuner',
        type: CarTypeEnum.XeSuv,
        models: [
          {
            brand: 'Toyota Fortuner 2.4 4x2 MT',
            price: 995000000
           },
           {
             brand: 'Toyota Fortuner 2.4 4x2 AT',
             price: 1080000000
           },
           {
             brand: 'Toyota Fortuner 2.7 4x2 AT máy xăng',
             price: 1130000000
           },
           {
             brand: 'Toyota Fortuner 2.7 4x4 AT máy xăng',
             price: 1230000000
           },
           {
             brand: 'Toyota Fortuner 2.8 4x4 AT',
             price: 1388000000
           },
           {
             brand: 'Toyota Fortuner 2.4 4x2 AT Legender',
             price: 1195000000
           },
           {
             brand: 'Toyota Fortuner 2.8 4x4 AT Legender',
             price: 1434000000
           }
        ],
        imgSrc: 'assets/img/cars/Fortuner.png',
        link: 'xe-toyota/fortuner',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Land Cruiser Prado VX',
        type: CarTypeEnum.XeSuv,
        imgSrc: 'assets/img/cars/land-cruiser-prado-VX.png',
        link: 'xe-toyota/land-cruiser-prado-VX',
        models: [
          {
            brand: 'Toyota Land Cruiser Prado VX',
            price: 2340000000
          }
        ],
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Land Cruiser',
        type: CarTypeEnum.XeSuv,
        imgSrc: 'assets/img/cars/land-cruiser.png',
        link: 'xe-toyota/land-cruiser',
        models: [
          {
            brand: 'Toyota Land Cruiser',
            price: 4038000000
          }
        ],
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Corolla Cross',
        type: CarTypeEnum.XeSuv,
        models: [
          {
            brand: 'Toyota Corolla Cross 1.8G CVT',
            price: 720000000
           },
           {
             brand: 'Toyota Corolla Cross 1.8V CVT',
             price: 82000000
           },
           {
             brand: 'Toyota Corolla Cross 1.8HV Hyrid',
             price: 910000000
           }
        ],
        imgSrc: 'assets/img/cars/Corolla Cross.jpg',
        link: 'xe-toyota/corolla-cross',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Innova',
        type: CarTypeEnum.XeChuyenDung,
        models: [
          {
            brand: 'Toyota Innova 2.0E MT',
            price: 750000000
           },
           {
             brand: 'Toyota Innova 2.0G AT',
             price: 865000000
           },
           {
             brand: 'Toyota Innova Venturer',
             price: 879000000
           },
           {
             brand: 'Toyota Innova 2.0V AT',
             price: 989000000
           }
        ],
        imgSrc: 'assets/img/cars/innova.png',
        link: 'xe-toyota/innova',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Avanza',
        type: CarTypeEnum.XeChuyenDung,
        models: [
          {
            brand: 'Toyota Avanza 1.5 MT',
            price: 544000000
          },
          {
            brand: 'Toyota Avanza 1.5 AT',
            price: 612000000
          }
        ],
        imgSrc: 'assets/img/cars/avanza.png',
        link: 'xe-toyota/avanza',
        colors: []
      });

      this.carInventory.push({
        name: 'Toyota Hilux',
        type: CarTypeEnum.XeBanTai,
        models: [
          {
            brand: 'Toyota HILUX 2.4L 4X2 MT',
            price: 622000000
           },
           {
             brand: 'Toyota HILUX 2.4L 4X2 AT',
             price: 674000000
           },
           {
             brand: 'Toyota HILUX 2.4L 4X4 MT',
             price: 799000000
           },
           {
             brand: 'Toyota HILUX 2.4L 4X4 AT Advanture',
             price: 913000000
           }
        ],
        imgSrc: 'assets/img/cars/hilux.png',
        link: 'xe-toyota/hilux',
        colors: []
      });

      this.carInventory.forEach((car) => {
        car.lowestPrice = this.getLowestPrice(car);
        car.models.forEach((model) => {
          model.link = this.generateLink(model.brand);
        });

        car.link = car.models[0].link;
      });
  }

  public ngOnInit() {}

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

  public getCar(name: string): CarInfoInterface | undefined{
    return this.carInventory.find(car => car.name === name);
  }

  public getCarFromUri(uri: string): CarInfoInterface | undefined {
    var selectedCar: CarInfoInterface | undefined = undefined;
    this.carInventory.forEach((car) => {
      car.models.forEach((model) => {
        if (model.link!!.indexOf(uri) >= 0 && selectedCar === undefined) {
          selectedCar = car;
        }
      });
    });

    return selectedCar;
  }

  public getCarModel(name: string, carModel: string): CarModelInfoInterface | undefined {
    const selectedCar = this.getCar(name);
    if (selectedCar) {
      return selectedCar.models.find((model) => model.brand === carModel)
    } else {
      return undefined;
    }
  }

  public getCarsByType(type: CarTypeEnum): CarInfoInterface[] {
    return this.carInventory.filter((car) => car.type === type);
  }

  public getCarModels(selectedCarName: string): string[] {
    const modelList: string[] = [];

    const selectedCar = this.getCar(selectedCarName);
    if (selectedCar) {
      selectedCar.models.forEach((model) => {
        modelList.push(model.brand);
      });
    }

    return modelList;
  }

  public getCarPrice(name: string, model: string): number {
    const selectedModel = this.getCarModel(name, model);
    if (selectedModel) {
      return selectedModel.price;
    } else {
      return 0;
    }
  }

  public getLowestPrice(carInfo: CarInfoInterface): number {
    const selectedCar = this.carInventory.find((car) => car === carInfo);
    if (selectedCar) {
      const sortedList = selectedCar.models.sort((a, b) => a.price - b.price);
      return sortedList[0].price;
    }

    return 0;
  }

  private generateLink(name: string): string {
    const result = `xe-toyota/${name.toLowerCase().replace(/[^0-9a-z]/gi, '-')}`;
    return result;
  }
}
