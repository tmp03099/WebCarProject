import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaAltis implements CarInfoInterface {
  name = 'Toyota Corolla Altis'
  type = CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/corolla altis.png'
  models = [
    {
      brand: 'Toyota Corolla Altis 1.8E CVT',
      price: 733000000
     },
     {
       brand: 'Toyota Corolla Altis 1.8G CVT',
       price: 763000000
     }
  ]
}
