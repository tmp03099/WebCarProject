import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaCamry implements CarInfoInterface {
  name   = 'Toyoto Camry'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/camry.png'
  banner = 'assets/img/toyota/camry/banner.jpg'
  models: CarModelInfoInterface[] =  [
    {
      brand: 'Toyota Camry 2.0G',
      price: 1029000000,
      lingo: 'Beautiful Monster',
      colors: [
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/camry/colors/silver-1D4.png',
          colorCode: 'silver'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/camry/colors/black-218.png',
          colorCode: 'black'
        }
      ]
     },
     {
       brand: 'Toyota Camry 2.5G',
       price: 1235000000,
     }
  ]
}
