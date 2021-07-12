import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaHilux implements CarInfoInterface {
  name = 'Toyota Hilux'
  type = CarTypeEnum.XeBanTai
  imgSrc = 'assets/img/cars/hilux.png'
  models = [
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
  ]
}
