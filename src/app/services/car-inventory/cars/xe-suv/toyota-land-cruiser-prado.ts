import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiserPrado implements CarInfoInterface {
  name = 'Toyota Land Cruiser Prado'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser-prado-VX.png'
  models = [
    {
      brand: 'Toyota Land Cruiser Prado VX',
      price: 2340000000
    }
  ]
}
