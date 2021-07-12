import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaRush implements CarInfoInterface {
  name = 'Toyota Rush'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Rush.png'
  models = [
    {
      brand: 'Toyota Rush 1.5 AT',
      price: 634000000,
      colors: [
        {
          label: 'Bạc',
          image: '/assets/img/toyota/rush/colors/Bac-2.png',
          colorCode: 'sliver'
        },
        {
          label: 'Đen',
          image: '/assets/img/toyota/rush/colors/Den-2.png',
          colorCode: 'black'
        },
        {
          label: 'Đỏ',
          image: '/assets/img/toyota/rush/colors/Do-2.png',
          colorCode: 'red'
        },
        {
          label: 'Đồng',
          image: '/assets/img/toyota/rush/colors/Dong-4t3.png',
          colorCode: 'bronze'
        },
        {
          label: 'Nâu',
          image: '/assets/img/toyota/rush/colors/Nau-2.png',
          colorCode: 'brown'
        },
        {
          label: 'Trắng',
          image: '/assets/img/toyota/rush/colors/Trang-2.png',
          colorCode: 'white'
        }
      ]
    }
  ]
}
