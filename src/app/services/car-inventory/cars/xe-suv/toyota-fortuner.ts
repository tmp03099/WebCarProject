import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaFortuner implements CarInfoInterface {
  name = 'Toyota Fortuner'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Fortuner.png'
  models = [
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
  ]

}
