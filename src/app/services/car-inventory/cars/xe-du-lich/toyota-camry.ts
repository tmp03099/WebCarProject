import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCamry implements CarInfoInterface {
  name   = 'Toyoto Camry'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/camry.png'
  banner = 'assets/img/toyota/camry/banner.jpg'
  models =  [
    {
      brand: 'Toyota Camry 2.0G',
      price: 1029000000,
      lingo: 'Beautiful Monster'
     },
     {
       brand: 'Toyota Camry 2.5G',
       price: 1235000000
     }
  ]
}
