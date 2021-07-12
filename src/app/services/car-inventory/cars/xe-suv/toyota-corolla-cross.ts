import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaCross implements CarInfoInterface {
  name = 'Toyota Corolla Cross'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Corolla Cross.jpg'
  banner = 'assets/img/toyota/corolla-cross/banner.jpg'
  models = [
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
  ]

}
