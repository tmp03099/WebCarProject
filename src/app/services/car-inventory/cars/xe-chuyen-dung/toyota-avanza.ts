import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaAvanza implements CarInfoInterface {
  name = 'Toyota Avanza'
  type = CarTypeEnum.XeChuyenDung
  imgSrc = 'assets/img/cars/avanza.png'
  models = [
    {
      brand: 'Toyota Avanza 1.5 MT',
      price: 544000000
    },
    {
      brand: 'Toyota Avanza 1.5 AT',
      price: 612000000
    }
  ]
}
