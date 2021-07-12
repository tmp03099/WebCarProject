import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaInnova implements CarInfoInterface {
  name = 'Toyota Innova'
  type = CarTypeEnum.XeChuyenDung
  imgSrc = 'assets/img/cars/innova.png'
  models = [
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
  ]
}
