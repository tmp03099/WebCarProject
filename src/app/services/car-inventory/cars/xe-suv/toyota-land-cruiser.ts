import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiser implements CarInfoInterface {
  name = 'Toyota Land Cruiser'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser.png'
  models = [
    {
      brand: 'Toyota Land Cruiser',
      price: 4038000000
    }
  ]
}
